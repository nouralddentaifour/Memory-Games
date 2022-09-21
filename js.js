document.querySelector(".start .buttom").onclick = function(){
    var yourName = prompt("what is your name")

    if(yourName===null || yourName===""){
        document.querySelector(".info-container .name span").innerHTML="UnKnow"

    }else{
        document.querySelector(".info-container .name span").innerHTML=yourName
    }

    document.querySelector(".start").remove()
}

let duration =1000

let doxs= document.querySelector(".boxs")

let dox= Array.from(doxs.children)
function flibed(selected){
    let box = Array.from(doxs.children)
   
   selected.classList.add("isflibed")

   let allFlippedBlock = box.filter(f => f.classList.contains("isflibed"));
   

   
   if(allFlippedBlock.length === 2){
        console.log("11111111")
        stopclicking() 
   }  

   match(allFlippedBlock[0],allFlippedBlock[1])

}
let orderRange = Array.from(Array(dox.length).keys())
shufill(orderRange)


dox.forEach(function(block,index){
block.style.order=orderRange[index]

block.addEventListener("click",function() {
    
    flibed(block);
})

});

function shufill(array){

    let current = array.length,
    temp,
    random;
    while (current > 0) {
        random = Math.floor(Math.random() * current)

        current--;

        temp=array[current]

        array[current]=array[random]

        array[random]=temp

    }
    return array

}


function stopclicking() {
    document.querySelector(".boxs").classList.add("no-clicked")
    setTimeout(() => {
        document.querySelector(".boxs").classList.remove("no-clicked")
    }, 1000);
}
function match(first,secound){
    let ter =document.querySelector(".tries span")
    if(first.dataset.tecno === secound.dataset.tecno){
        first.classList.remove("isflibed")
        secound.classList.remove("isflibed")
        first.classList.add("match")
        secound.classList.add("match")
        document.querySelector(".suc").play()
    }else{
        ter.innerHTML++
        setTimeout(() => {
            first.classList.remove("isflibed")
            secound.classList.remove("isflibed")
        }, 1000);
        document.querySelector(".fail").play()
    }

}

