class Player{
    score = 0;

    pause(){
        console.log("Paused game");
    }

    exit(){
        console.log("Exited game");
    }
}

const player1 = new Player();
player1.score += 1;

console.log(player1.score);
player1.pause();
player1.exit();