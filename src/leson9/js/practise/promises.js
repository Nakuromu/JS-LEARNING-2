//----------Exercise-1-----------//

// const makeOrder = dish => {
//     const DELAY = 1000;
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if(passed){
//                 resolve(`Your order: ${dish}`)
//             }
//             reject('We are lack of products');
//         }, DELAY)
//     })
// }

// makeOrder('cake').then(OnMakeOrderSuccess).catch(OnMakeOrderFail)

// function OnMakeOrderSuccess (result){
//     console.log(result);
// }

// function OnMakeOrderFail(result){
//     console.log(result);
// }

//----------Exercise-2(Ipodrom)-----------//

// const horses = ['horse1', 'horse2', 'horse3', 'horse4', 'horse5']

// let raceCounter = 0;

// const startBtnEl = document.querySelector('.js-button-start');
// const winnerFieldEl = document.querySelector('.js-winner');
// const progressFieldEl = document.querySelector('.js-progress');
// const tableBodyEl = document.querySelector('.js-result-table> tbody');

// startBtnEl.addEventListener('click', onStart);

// function onStart(){
//     raceCounter += 1;
//     const promises = horses.map(run);

//     updateWinnerField('')
//     updateProgressField('Race start, bets doesnt takes');
//     determineWinner(promises);
//     waitForAll(promises);
// }

// function determineWinner(hourseP) {
//     Promise.race(hourseP).then(({horse, time}) => {
//         updateWinnerField(`Winner ${horse}, finished for ${time}`);
//         updateResultTable({horse, time, raceCounter});
//     })
// }

// function waitForAll (horseP) {
//     Promise.all(horseP).then(() => {
//         updateProgressField('Race finished, bets takes');
//     })
// }

// function updateProgressField(message){
//     progressFieldEl.textContent = message;
// }

// function updateWinnerField(message){
//     winnerFieldEl.textContent = message;
// }

// function updateResultTable({horse, time, raceCounter}){
//     const tr = `    <tr>
//         <td>${raceCounter}</td>
//         <td>${horse}</td>
//         <td>${time}</td>
//     </tr>`

//     tableBodyEl.insertAdjacentHTML('beforeend', tr);
// }

// function run(horse){
//     return new Promise(resolve => {
//         const time = getRandomTime(2000, 3500);

//         setTimeout(() => {
//             resolve({horse, time})
//         }, time)
//     })
// }

// function getRandomTime(min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

//----------Exercise-3(promisification)-----------//

// //Before promisification

// // const fatchUserByName = (name, onSuccess, onError) => {
// //     console.log('Make server access...')

// //     setTimeout(() => {
// //         const isDone = Math.random();

// //         if(isDone < 0.5){
// //             const user = {
// //                 firstName: name,
// //                 lastName: 'Francis',
// //                 age: 30,
// //             }
    
// //             onSuccess(user);
// //         } else{
// //             onError('User not find');
// //         }
// //     }, 2000)
// // }

// // const handelSuccess = data => {
// //     console.log(data);
// // }

// // const handelError = err => {
// //     console.error(err)
// // }

// // fatchUserByName('Ann', handelSuccess, handelError)

// //After

// const fatchUserByName = (name) => {
//     console.log('Make server access...')

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const isDone = Math.random();
    
//             if(isDone < 0.5){
//                 const user = {
//                     firstName: name,
//                     lastName: 'Francis',
//                     age: 30,
//                 }
        
//                 resolve(user);
//             } else{
//                 reject('User not find');
//             }
//         }, 2000)
//     })
// }

// fatchUserByName('Ann').then(console.log).catch(console.log)