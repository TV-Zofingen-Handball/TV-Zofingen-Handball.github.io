const loadingPause = 300;

function appendLeadingZeroes(n){
  if(n <= 9){
    return "0" + n;
  }
  return n
}

function getDate(dateString) {
  return new Date(dateString);
}

function getDateMonth(d) {
  let year = d.getFullYear();
  let month = appendLeadingZeroes(d.getMonth() + 1);
  let day = appendLeadingZeroes(d.getDate());
  return year + '-' + month + '-' + day;
}

function getDateTime(d) {
  let dateMonth = getDateMonth(d);
  let hours = appendLeadingZeroes(d.getHours());
  let minutes = appendLeadingZeroes(d.getMinutes());
  return dateMonth + ' ' + hours + ':' + minutes;
}

function getIcon(result) {
  if (isDraw(result)) {
    return '⚪';
  } else if (isZofingenWin(result)) {
    return '🚀';
  }
  return '🔴';
}

function getFormattedDate(dateString, format) {
  var date = Date(dateString);
  return date.toLocaleString('de-CH');
}

function getFormattedResult(result) {
  let icon = getIcon(result);
  return result.teamAScoreFT + ':' + result.teamBScoreFT + ' (' + result.teamAScoreHT + ':' + result.teamBScoreHT + ') ' + icon;
}

function getOpponent(game) {
  if (isZofingen(game.teamAName)) {
    return game.teamBName;
  }
  return game.teamAName;
}

function getSHVid() {
  let shv_id = document.getElementById('shv_id');
  return shv_id.getAttribute('data-value');
}

function isVerein() {
  let verein = document.getElementById('is_verein');
  return verein.getAttribute('data-value') !== '0';
}

function isZofingen(team) {
  return team.includes('Zofingen');
}

function isDraw(result) {
  return result.teamAScoreFT === result.teamBScoreFT;
}

function isZofingenWin(result) {
  return ((result.teamAScoreFT > result.teamBScoreFT) && isZofingen(result.teamAName) || (result.teamAScoreFT < result.teamBScoreFT) && isZofingen(result.teamBName));
}

function isZofingenLoss(result) {
  return ((result.teamAScoreFT > result.teamBScoreFT) && isZofingen(result.teamBName) || (result.teamAScoreFT < result.teamBScoreFT) && isZofingen(result.teamAName));
}

function perGame(value, games) {
  if (games === 0) {
    return 0;
  }
  return (value / games).toFixed(1);
}

function showProblem(rankingTable, response) {
  const div = document.createElement('tr');
  const message = `<td>Something went wrong with your request (${response.status})</td>`;
  div.innerHTML = message;
  rankingTable.appendChild(div);
}
