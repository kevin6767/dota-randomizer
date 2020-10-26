var hero = document.getElementById('hero');
var wins = document.querySelector('#wins')
var losses = document.querySelector('#losses')
var btn = document.querySelector('#rerollBtn')
var response = document.querySelector('#cancel')
var winBtn = document.querySelector('#win')
var lossBtn = document.querySelector('#loss')
var clear = document.querySelector('#clearBtn')


//Global 
let test = true;
var rerollCount = 0;
let randomHero;


function randomizer(params) {
    let random = heroes.length;
    randomHero = Math.floor(Math.random()*random)

    return randomHero
}

function initRoll(params) {
    randomizer();
    hero.textContent = heroes[randomHero].name;
    wins.textContent = ('Number of wins :', heroes[randomHero].wins);
    losses.textContent = ('Number of losses :', heroes[randomHero].losses);
} 

function reroll(params) {
    if(test){console.log('---Re Rolling---')}
    console.log(rerollCount)
    if (rerollCount > 2) {
        console.log('---Checking Count---')
        response.textContent = 'You cannot reroll';

    }else if (rerollCount > 5){
        clearLocal();
    }else {
        console.log('---Generating---')
        rerollCount++;
        randomizer();
        hero.textContent = '';
        hero.textContent = heroes[randomHero].name;
        wins.textContent = heroes[randomHero].wins;
        losses.textContent = heroes[randomHero].losses;

    }
}

function winRoll(params) {
    heroes[randomHero].wins++;
    wins.textContent = heroes[randomHero].wins;
    rerollCount--;
    initRoll();
}


function clearLocal(params) {
    localStorage.clear('clear')
}


clear.addEventListener('click',clearLocal)
btn.addEventListener('click', reroll)
winBtn.addEventListener('click', winRoll)
//lossBtn.addEventListener('click', lossRoll)
initRoll();

