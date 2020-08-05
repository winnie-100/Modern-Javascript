

const section = document.getElementById("section");
const btn_change = document.querySelector("#change-word");
const colors = ["blue",'red',"green","teal"];

const words = ["Hi there!", "my second element appearing", "Third one now","there will be more"];

let cur_word = words.length-1;
// template literals help to insert JS elements into strings =helps to break elements too
section.innerHTML = `<p> ${words[cur_word]} </p>`;
section.style.color=colors[cur_word];


console.log('hello');

// function wordChange(e)
// {
// cur_word --;

// if(cur_word==0){
//     cur_word = words.length-1;
// } else{
//     cur_word --;
// } 

// 

// fat arrow matured way to write it
// wordChange = (e)=>{
//     if(cur_word ==0)
//     {
//         cur_word =words.length-1;
//     } else{
//         cur_word--;
//     }
//     section.innerHTML = `<p> ${words[cur_word]} </p>`;
// }
// without calling a function
// when the call back function wont be used in anywhere else
// this is a call back function

// words.map(word=> {
//     section.innerHTML = `<p> ${}`
// })

btn_change.addEventListener("click", (e)=> {
    if(cur_word ==0)
    {
        cur_word =words.length-1;
    } else{
        cur_word--;
    }
    section.innerHTML = `<p> ${words[cur_word]} </p>`;
    section.style.color = colors[cur_word];
}) 

