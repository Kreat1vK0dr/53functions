// allows one to play rock paper scissors * = rock, # = paper, x = scissors,
// it should be a constructor function that takes in the number of games to be played.
// var game1 = new RockPaperScissors(3) should have a play and a score method.
// The play method should generate a turn for each of the
// two players and return the result like this: {result : '* - x', winner : 'Player1', status : 'busy' }
// until a game is done, in which case it should return a status of done whenever the play method is called.
// The score method should return a score like this : { Player1 : 1, Player2 : 2, winner : 'Player1' }.
// The winner property should only be returned if a game has been won by a player.

function choice(char) {
  switch (char) {
    case '*': return 'rock';
    case '#': return 'paper';
    case 'x': return 'scissors';
  }
}
