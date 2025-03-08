/*PIG GAME...

Turns: Players take turns rolling the die.

If you roll a 2, 3, 4, 5, or 6: 
You add that number to your current turn score. You can then choose to either:

Roll Again: Continue rolling the die, adding to your current turn score.

Hold: Add your current turn score to your total score and end your turn. The turn then passes to the next player.


If you roll a 1: 
Your current turn score becomes zero, and your turn ends immediately. The turn then passes to the next player. You don't add anything to your total score for that turn.



Scoring:
Total Score: A player's total score is the sum of all the points they've accumulated from previous turns. This is the score that determines who wins.
Current Turn Score: This is the score a player accumulates during their current turn. It resets to zero if they roll a 1.

Winning: The first player to reach or exceed the target score (100) wins the game.
*/
'use strict';

let rand
let p1_score=document.querySelector('#score--0').textContent;
let p2_score=document.querySelector('#score--1').textContent;
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
console.log(player1.textContent);
console.log(player2.textContent);
console.log(p2_score);

let currentScore = 0; 
let activePlayer = 0; //P1 is 0 , P2 is 1
let scores = [0, 0]; // Store total scores of players

const switchPlayer = function(){
    console.log(currentScore);
    if(activePlayer==0){
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
        activePlayer=1;
        currentScore = 0;
        document.querySelector('#current--0').textContent=0;
        // scores[0]=0;
    }
    else{
        player2.classList.remove('player--active');
        player1.classList.add('player--active');
        activePlayer=0;
        currentScore = 0;
        document.querySelector('#current--1').textContent=0;
        // scores[1]=0
    }
}



const rollb = document.querySelector('.btn--roll');
const holdb = document.querySelector('.btn--hold');

rollb.addEventListener('click',function(){
    rand = Math.floor(Math.random()*6)+1;
    console.log(rand);
    if(rand==1){
        switchPlayer();
        document.querySelector('.dice').src = `dice-${1}.png`;
    }else{
        document.querySelector('.dice').src = `dice-${rand}.png`; //Nice
        currentScore+=rand;
        // if(activePlayer==0){
        //     document.querySelector('#current--0').textContent=currentScore;
        // }
        // else{
        //     document.querySelector('#current--1').textContent=currentScore;
        // }

        document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
        //Replaced this with the regular if-else cool..right?
    }
});

holdb.addEventListener('click',function(){
    if(activePlayer==0){
        scores[0]+=currentScore;
        document.querySelector('#score--0').textContent=scores[0];
    }
    else if (activePlayer==1){
        scores[1]+=currentScore;
        document.querySelector('#score--1').textContent=scores[1];
    }
    if(scores[0]>=100){
        player1.classList.add('player--winner');
        rollb.disabled = true;
        holdb.disabled = true; 
    }
    else if (scores[1]>=100){
        player2.classList.add('player--winner');
        rollb.disabled = true;
        holdb.disabled = true; 
    }
    switchPlayer();
})