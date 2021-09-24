function rollDice() {
    let goldCoins = 0;
    for (i=0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game Over! No more rolls buddy!');
            break;
        }
        if (roll === 4 && goldCoins !== 0) {
            goldCoins = goldCoins - 1;
            alert('You rolled a 4, that means minus one gold coin!');
            continue;
        }
        if (roll < 5) {
            continue;
        }
        alert('Congratulations! You win ' + roll + ' gold coins!');
        goldCoins += roll;
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}