const rankingTable = document.getElementById('result-ranking-body');
let rankingButton = document.getElementById('ranking-button');
const rankingBaseLink = 'https://api.tvzofingen.ch';
let lastLoadedRanking = new Date(0);
//Get token from local storage
let myHeaders = new Headers();
//
myHeaders.append('Content-Type', 'application/json');

let requestOptions = {
  headers: myHeaders,
};

//Get a list of courses
async function getRanking() {
  let now = new Date();
  if ((now.getTime() - lastLoadedRanking.getTime()) / 1000 < loadingPause) {
    return;
  }
  rankingButton.classList.add('is-loading');
  requestOptions.method = 'GET';
  let shv_id = getSHVid();
  const response = await fetch(rankingBaseLink + '/teams/' + shv_id + '/group/ranking', requestOptions);
  if (response.status === 200) {
    const data = await response.json();
    const rankings = data;

    lastLoadedRanking = new Date();
    rankingButton.classList.remove('is-loading');

    if (data === null) {
      showProblem(rankingTable, response);
    } else {
      // Add rankings to the table
      rankingTable.innerHTML = '';
      Array.from(rankings).forEach((ranking) => {
        const tr = document.createElement('tr');
        if (isZofingen(ranking.teamName)) {
          tr.classList.add('is-selected');
        }
        tr.setAttribute('key', ranking.rank);
        let pointspG = perGame(ranking.totalPoints,ranking.totalGames);
        let diffpG = perGame(ranking.totalScoresDiff,ranking.totalGames);
        let pluspG = perGame(ranking.totalScoresPlus,ranking.totalGames);
        let minuspG = perGame(ranking.totalScoresMinus,ranking.totalGames);
        tr.innerHTML = `<td>${ranking.rank}</td>
                       <td>${ranking.teamName}</td>
                       <td>${ranking.totalPoints}</td>
                       <td>${ranking.totalGames} (${ranking.totalWins} ${ranking.totalDraws} ${ranking.totalLoss})</td>
                       <td>${ranking.totalScoresDiff} (${ranking.totalScoresPlus}:${ranking.totalScoresMinus})</td>
                       <td class="is-hidden-mobile">${pointspG}</td>
                       <td class="is-hidden-mobile">${diffpG} (${pluspG}:${minuspG})</td>
                       `;
        rankingTable.appendChild(tr);
      });
    }
  } else {
    showProblem(rankingTable, response);
  }
};

getRanking();
rankingButton.addEventListener("click", getRanking);
