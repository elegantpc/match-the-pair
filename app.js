const cards = [
    {
        name: 'shaka',
        img: 'images/shaka.jpg'
    },
    {
        name: 'mu',
        img: 'images/mu.jpg'  
    },
    {   name: 'leo',
        img: 'images/leo.jpg'
    },
    {
        name: 'saga',
        img: 'images/saga.jpg'
    },
    {
        name: 'aludiba',
        img: 'images/aludiba.jpg'
    },
    {
        name: 'kamu',
        img: 'images/kamu.jpg'

    },
    {
        name: 'shaka',
        img: 'images/shaka.jpg'
    },
    {
        name: 'mu',
        img: 'images/mu.jpg'  
    },
    {   name: 'leo',
        img: 'images/leo.jpg'
    },
    {
        name: 'saga',
        img: 'images/saga.jpg'
    },
    {
        name: 'aludiba',
        img: 'images/aludiba.jpg'
    },
    {
        name: 'kamu',
        img: 'images/kamu.jpg'

    }
]

cards.sort(()=>0.5-Math.random())

//制作卡片板思路：
//1.在html里面设立一个<div>container； 2. 在js里面建立卡的data base, 重复的六张，一共12张, 

const cardGrid = document.getElementById('grid');

function creatBoard(){
    for (let i=0; i<cards.length; i++) {
      const card = document.createElement('img')
      console.log(card)
      card.setAttribute('id', i)
      card.setAttribute('src', 'images/blank.png')
      card.addEventListener('click', flipCard)
      cardGrid.appendChild(card)
 }
}

creatBoard();

//翻牌

let flipedCardsId=[];
let flipedCards=[];
let countCards=[];
let score=document.getElementById('result');

function matchedPair(){
    const allCards= document.querySelectorAll('img')
    if (flipedCards[0]===flipedCards[1]) {
       alert ('You find a pair')
       allCards[flipedCardsId[0]].setAttribute('src', 'images/white.png')
       allCards[flipedCardsId[1]].setAttribute('src', 'images/white.png')
       allCards[flipedCardsId[0]].removeEventListener('click', flipCard)
       allCards[flipedCardsId[1]].removeEventListener('click', flipCard)
       countCards.push(flipedCards);
       if (countCards.length<6){
        score.innerHTML=countCards.length;  
       } 
       if (countCards.length===6){
        score.innerHTML='You find All Pairs!'  
       }
       
    }else {
       allCards[flipedCardsId[0]].setAttribute('src', 'images/blank.png')
       allCards[flipedCardsId[1]].setAttribute('src', 'images/blank.png')
    }
    flipedCards=[]
    flipedCardsId=[]
    

}

function flipCard(){
   let cardId = this.getAttribute('id')
   let cardName = cards[cardId].name
   let image = cards[cardId].img;
   this.setAttribute('src', image);
   flipedCards.push(cardName)
   flipedCardsId.push(cardId)
   if (flipedCards.length===2){
       setTimeout (matchedPair, 500)
   }
   
}



