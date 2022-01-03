let countEl = document.getElementById("count-el");
let count =0;
const increment=()=>{
    console.log(count)
    countEl.innerText=count
    count++;
}
increment()

const save=()=>{
    console.log(count)
}