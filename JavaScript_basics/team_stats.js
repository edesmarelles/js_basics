const team = {
    _players: [
      { firstName: "Michael", lastName: "Scott", age: 43 },
      { firstName: "Zinédine", lastName: "Zidane", age: 35 },
      { firstName: "Mads", lastName: "Mikkelsen", age: 53 },
    ],
    _games: [
      { opponent: "PSG", teamPoints: 3, opponentPoints: 0 },
      { opponent: "OL", teamPoints: 5, opponentPoints: 2 },
      { opponent: "FCK", teamPoints: 1, opponentPoints: 4 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addplayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      };
      this.players.push(player);
    },
   addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      };
      this.games.push(game);
    },
  };
  
  team.addplayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team);