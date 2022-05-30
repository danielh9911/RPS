// Type "Rock", "Paper", or "Scissor" in the '' below

var playerSelection = 'Scissors'


const rps = function() {
    var cpu = '';
    var ranNum = Math.floor(Math.random() * 3);
    if(ranNum === 0) {
        cpu = 'Rock'
    } else if(ranNum === 1) {
        cpu = 'Paper'
    } else if(ranNum === 2) {
        cpu = 'Scissors'
    }

    if(playerSelection === 'Rock' || playerSelection === 'rock' && cpu === 'Rock') {
        console.log('CPU played ' + cpu + ' you tied. -_-');
    } else if(playerSelection === 'Rock' || playerSelection === 'rock' && cpu === 'Paper') {
        console.log('CPU played ' + cpu + ' you lose. :(');
    } else if(playerSelection === 'Rock' || playerSelection === 'rock' && cpu === 'Scissors') {
        console.log('CPU played ' + cpu + ' you win! :)');
    } else if(playerSelection === 'Paper' || playerSelection === 'paper' && cpu === 'Rock') {
        console.log('CPU played ' + cpu + ' you win! :)');
    } else if(playerSelection === 'Paper' || playerSelection === 'paper' && cpu === 'Paper') {
        console.log('CPU played ' + cpu + ' you tied. -_-');
    } else if(playerSelection === 'Paper' || playerSelection === 'paper' && cpu === 'Scissors') {
        console.log('CPU played ' + cpu + ' you lose. :(');
    } else if(playerSelection === 'Scissors' || playerSelection === 'scissors' && cpu === 'Rock') {
        console.log('CPU played ' + cpu + ' you lose. :(');
    } else if(playerSelection === 'Scissors' || playerSelection === 'scissors' && cpu === 'Paper') {
        console.log('CPU played ' + cpu + ' you win! :)');
    } else if(playerSelection === 'Scissors' || playerSelection === 'scissors' && cpu === 'Scissors') {
        console.log('CPU played ' + cpu + ' you tied. -_-');
    } else if (playerSelection === '') {
        console.log('Type in ur choice')
    }
};
rps();
