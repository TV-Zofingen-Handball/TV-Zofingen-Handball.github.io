const resultTable = document.getElementById('results-body');
let resultsButton = document.getElementById('results-button');
const resultBaseLink = 'https://api.tvzofingen.ch';
let lastLoadedResults = new Date(0);
//Get token from local storage
let resultHeaders = new Headers();
resultHeaders.append('Content-Type', 'application/json');

let resultRequestOptions = {
  headers: resultHeaders,
};

//Get a list of courses
async function getResults() {
  let now = new Date();
  if ((now.getTime() - lastLoadedResults.getTime()) / 1000 < loadingPause) {
    return;
  }
  resultsButton.classList.add('is-loading');
  resultRequestOptions.method = 'GET';
  let shv_id = getSHVid();
  let url = resultBaseLink + '/teams/' + shv_id + '/games?status=played';
  if (isVerein()) {
    url = resultBaseLink + '/clubs/' + shv_id + '/games?status=played&order=desc&limit=7';
  }
  const response = await fetch(url, resultRequestOptions);
  if (response.status === 200) {
    const data = await response.json();
    const results = data;

    lastLoadedResults = new Date();
    resultsButton.classList.remove('is-loading');

    if (data === null) {
      showProblem(resultTable, response);
    } else {
      resultTable.innerHTML = '';
      // Add rankings to the table
      Array.from(results).forEach((result) => {
        const tr = document.createElement('tr');
        tr.setAttribute('key', result.gameNr);
        let dateMonth = getDateMonth(getDate(result.gameDateTime));
        let opponent = getOpponent(result);
        let resultDisplay = getFormattedResult(result);
        tr.innerHTML = `<td>${dateMonth}</td>
                       <td>${result.leagueShort}</td>
                       <td>${opponent}</td>
                       <td style="white-space:nowrap;">${resultDisplay}</td>
                       `;
        if (result.leagueShort !== 'M3') {
          resultTable.appendChild(tr);
        }
      });
    }
  } else {
    showProblem(resultTable, response);
  }
};

resultsButton.addEventListener("click", getResults);
if (isVerein()) {
  getResults();
}
