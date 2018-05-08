// console.log("In chap 10, I put functions threw their pace, but now I get hard-core");
//
// window.onload = function () {
//     let button = document.getElementById("bake");
//     button.onclick = function () {
//         console.log("Time to bake the cookies.");
//         cookies.bake(2500);
//     };
// };
//
// let cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function (time) {
//         console.log("Baking the cookies.");
//         setTimeout(done, time);
//     }
// };
//
// function done () {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookies.");
//     setTimeout(function () {
//         alert("Cookies are cool, time to eat!")
//     }, 1000);
// }
//
// administer(patient, function (dosage) {
//     if (dosage > 0) inject(dosage);
// }, time);
//
//
// let migrating = true;
// let fly = function(num) {
//     let sound = "Flying";
//     function wingFlapper() {
//         console.log(sound);
//     }
//     for (let i = 0; i < num; i++) {
//         wingFlapper();
//     }
// };
//
// function quack(num) {
//     let sound = "Quack";
//     let quacker = function () {
//         console.log(sound);
//     };
//     for (let i = 0; i < num; i++) {
//         quacker();
//     }
// }
//
// if (migrating) {
//     quack(4);
//     fly(4);
// }
//
//
//
//
// // Specimen #1
// let secret = "007";
//
// function getSecret() {
//     let secret = "008";
//     function getValue() {
//         return secret;
//     }
//     return getValue();
// }
//
// getSecret();
//
// // Speciment #2
// let secret = "007";
//
// function getSecret() {
//     let secret = "008";
//     function getValue() {
//         return secret;
//     }
//     return getValue;
// }
// var getValueFun = getSecret();
// getValueFun();
//
//
//

window.onload = () => {
    let count = 0;
    let msg = "You click me ";
    let div = document.getElementById("msg");
    let btn = document.getElementById("clickme");

    btn.onclick = () => {
        count++;
        div.innerHTML = msg + count + " times";
    };
}
