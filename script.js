'use strict';
let randomNum = Math.trunc(Math.random()*20)+1;
let score = 20;
let lostGame=0;
let highScore = 0;


document.querySelector('.check').addEventListener('click',function(){
let guessingVal = Number(document.querySelector('.guess').value);


    if(!guessingVal){
    document.querySelector('.message').textContent = 'No number!';
}else if(guessingVal===randomNum){
    document.querySelector('.message').textContent = 'Perfect One!';
    document.querySelector('body').style.backgroundColor= '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNum;
    
    if(score > highScore){
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
}else if(guessingVal > randomNum){
    if(score > 1){
    document.querySelector('.message').textContent = 'Value is high';
        score--;
    document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = lostGame;
    }
}else if(guessingVal < randomNum){
    
    if(score > 1){
    document.querySelector('.message').textContent = 'Value is low';
    score--;
    document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = lostGame;
    }
}

})


document.querySelector('.again').addEventListener('click',function(){
score = 20;
    let randomNum = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent ='?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
     document.querySelector('.score').textContent = score;
    
})
