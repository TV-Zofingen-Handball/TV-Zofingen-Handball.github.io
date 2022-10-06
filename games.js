const gamesTable = document.getElementById('games-body');
let gamesButton = document.getElementById('games-button');
let lastLoadedGames = new Date(0);
const gamesBaseLink = 'https://api.tvzofingen.ch';
//Get token from local storage
let gamesHeaders = new Headers();
gamesHeaders.append('Content-Type', 'application/json');

let gamesRequestOptions = {
  headers: gamesHeaders,
};

//Get a list of courses
async function getGames() {
  let now = new Date();
  if ((now.getTime() - lastLoadedGames.getTime()) / 1000 < loadingPause) {
    return;
  }
  gamesButton.classList.add('is-loading');
  gamesRequestOptions.method = 'GET';
  let shv_id = getSHVid();
  let url = gamesBaseLink + '/teams/' + shv_id + '/games?status=planned';
  if (isVerein()) {
    url = gamesBaseLink + '/clubs/' + shv_id + '/games?status=planned&limit=10';
  }
  const response = await fetch(url, gamesRequestOptions);
  if (response.status === 200) {
    const data = await response.json();
    const games = data;

    lastLoadedGames = new Date();
    gamesButton.classList.remove('is-loading');

    if (data === null) {
      showProblem(gamesTable, response);
    } else {
      // Add rankings to the table
      gamesTable.innerHTML = '';
      Array.from(games).forEach((game) => {
        const tr = document.createElement('tr');
        tr.setAttribute('key', game.gameNr);
        let opponent = getOpponent(game);
        let dateMonth = getDateTime(getDate(game.gameDateTime));
        tr.innerHTML = `<td>${dateMonth}</td>
                       <td>${game.leagueShort}</td>
                       <td>${opponent}</td>
                       <td>${game.venue}</td>
                       `;
        if (game.leagueShort !== 'M3') {
          gamesTable.appendChild(tr);          
        }
      });
    }
  } else {
    showProblem(gamesTable, response);
  }
};

gamesButton.addEventListener("click", getGames);
