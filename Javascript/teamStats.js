team = {
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    };
    this.games.push(game);
  },
_players: [
  {
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  },
  {
    firstName: 'Pencil',
    lastName: 'Sharpener',
    age: 12
  },
  {
    firstName: 'Big',
    lastName: 'Eraser',
    age: 13
  }
], 
_games: [
  {
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
  },
  {
    opponent: 'Cowboys',
    teamPoints: 24,
    opponentPoints: 72
  },
  {
    opponent: 'Rodeos',
    teamPoints: 2,
    opponentPoints: 7
  },
],
  get players() {
  return this._players;
  },
  
  get games() {
  return this._games;
  }
}

team.addPlayer('Steph', 'Curry', 28)

team.addGame('AAA', 2, 7)
team.addGame('BBB', 3, 8)
team.addGame('CCC', 4, 9)

// console.log(team._games)
// console.log(team._players)
