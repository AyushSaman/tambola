const allCells = document.querySelectorAll('.tambola-ticket-cell');
const randomNum = document.querySelector('#randomNum');
let prize = document.querySelector('#prize-num');
const fullHouse = document.querySelector('#full-house');
const rows = document.querySelector('#rows');
const corners = document.querySelector('#corners');
const availablePrizes = document.querySelector('.available-prizes');
const viewPrizeBtn = document.querySelector('#remainingPrizes');
const yourPrizes = document.querySelector('.your-prizes');
const yourPrizesBtn = document.querySelector('#yourPrizesBtn');
const yourPrizeNum = document.querySelector('#your-prize-num')
const yourFullHouse = document.querySelector('#your-full-house')
const yourRows = document.querySelector('#your-rows')
const yourCorners = document.querySelector('#your-corners')
const rowsBtn = document.querySelector('.rows');
const fullHouseBtn = document.querySelector('.full-house');
const cornersBtn = document.querySelector('.corners');
const closeBtnYour = document.querySelector('.your-prize-close');
const closeBtnAll = document.querySelector('.all-prize-close');

setInterval(function () {
    randomNum.innerHTML = Math.floor(Math.random() * 90);
    setTimeout(function () {
        randomNum.innerHTML = "<div class='spinner-border spinner-border-lg text-danger'></div>";
    },4000)
},5000)


closeBtnYour.addEventListener("click",()=>{
    yourPrizes.classList.remove('your-active-price')
})


prize.innerHTML = 6
fullHouse.innerHTML = 1
rows.innerHTML = 2
corners.innerHTML = 3

yourPrizeNum.innerHTML = 0
yourFullHouse.innerHTML = 0
yourRows.innerHTML = 0
yourCorners.innerHTML = 0


rowsBtn.addEventListener('click',()=>{
    if (rows.innerHTML == 0) {
        rowsBtn.setAttribute("disabled", "true")
    }else{
        rows.innerHTML--
        prize.innerHTML--
        yourPrizeNum.innerHTML++
        yourRows.innerHTML++
    }
})

fullHouseBtn.addEventListener('click',()=>{
    if (fullHouse.innerHTML == 0) {
        fullHouseBtn.setAttribute("disabled", "true")
    }else{
        fullHouse.innerHTML--
        prize.innerHTML--
        yourFullHouse.innerHTML++
        yourPrizeNum.innerHTML++
    }
})

cornersBtn.addEventListener('click',()=>{
    if (corners.innerHTML == 0) {
        cornersBtn.setAttribute("disabled", "true")
    }else{
        corners.innerHTML--
        prize.innerHTML--
        yourCorners.innerHTML++
        yourPrizeNum.innerHTML++
    }
})


viewPrizeBtn.addEventListener('click',()=>{
    availablePrizes?.classList.add('active-price')
})

yourPrizesBtn.addEventListener('click',()=>{
    yourPrizes.classList.add('your-active-price')
})


closeBtnAll.addEventListener("click",()=>{
    availablePrizes?.classList.remove('active-price')
})


closeBtnYour.addEventListener("click",()=>{
    yourPrizes.classList.remove('your-active-price')
})


// let randomNum = Array.from({length: 10}, () => Math.floor(Math.random() * 90));

// randomNum.forEach(e => {
//     let numList = document.createElement("li")
//     let textNode = document.createTextNode(`${e}`)
//     console.log(e);
//     numList.appendChild(textNode)
//     randomNumList.appendChild(numList)
//     // console.log(numList.textContent);
// });

allCells.forEach(e => {
    e.addEventListener('click', () => {
        if (e.innerHTML !== "") {
            e.classList.toggle("striked")
        }
        // checkRows(firstRow)
    })
})


// const firstRow = Array.from(document.querySelectorAll('.first-row'));
// const secondRow = document.querySelectorAll('.second-row');
// const thirdRow = document.querySelectorAll('.third-row');

// function checkRows(rowNum) {
//     let isRowCompleted = [false,false,false,false,false]
//     rowNum.forEach(e => {
//         if (e.innerHTML !== "") {
//             // console.log(e.innerHTML);
//             // console.log(e.classList.contains('striked'));
//             isRowCompleted[0] = (e.classList.contains('striked'))
//             isRowCompleted[1] = (e.classList.contains('striked'))
//             isRowCompleted[2] = (e.classList.contains('striked'))
//             isRowCompleted[3] = (e.classList.contains('striked'))
//             isRowCompleted[4] = (e.classList.contains('striked'))
//             // console.log(isRowCompleted);
//             // if (isRowCompleted.includes(false)) {
                
//             // }else{
//             //     alert(`${rowNum} is completed `)
//             // } 
//         }
//     })
// }