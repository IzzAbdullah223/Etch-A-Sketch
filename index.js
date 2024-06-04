const Canvas=document.querySelector(".Canvas")
 
const GridNumber=document.querySelector(".GridNumber")

const ColorSelect=document.querySelector(".ColorSelect")

const resetButton=document.querySelector(".ResetBTN")

const startButton=document.querySelector(".StartBTN")

const RainbowButton=document.querySelector(".RainbowBTN")






 

function resetCanvas(){
    
    
    for(let i=0;i<GridNumber.value*GridNumber.value;i++){
        let newBox=document.createElement("div")
         newBox.addEventListener("mouseover",(event)=>{
             newBox.style.backgroundColor="none"
             console.log(newBox)
         })
         Canvas.appendChild(newBox)
         newBox.classList.add("box")
     }
     Canvas.innerHTML=""

}

startButton.addEventListener("click",(event)=>{
    Canvas.innerHTML=""
    RainbowButton.style.outline="none"

     

    for(let i=0;i<GridNumber.value*GridNumber.value;i++){
       let newBox=document.createElement("div")
        newBox.addEventListener("mouseover",(event)=>{
            newBox.style.backgroundColor=ColorSelect.value
            console.log(newBox)
        })
        Canvas.appendChild(newBox)
        newBox.classList.add("box")
        Canvas.style.setProperty('grid-template-columns', 'repeat(' + GridNumber.value + ', 1fr)');
    }

})

resetButton.addEventListener("click",(event)=>{

         
    Canvas.innerHTML=""
    RainbowButton.style.outline="none"
    resetCanvas()
    for(let i=0;i<GridNumber.value*GridNumber.value;i++){
        let newBox=document.createElement("div")
         newBox.addEventListener("mouseover",(event)=>{
             newBox.style.backgroundColor=ColorSelect.value
             console.log(newBox)
         })
         Canvas.appendChild(newBox)
         newBox.classList.add("box")
     }

})
RainbowButton.addEventListener("click",(event)=>{
    Canvas.innerHTML=""
    for(let i=0;i<GridNumber.value*GridNumber.value;i++){
        let newBox=document.createElement("div")
         newBox.addEventListener("mouseover",(event)=>{
            let randomcolor=Math.floor(Math.random()*16777215).toString(16);
            console.log(randomcolor)
             newBox.style.backgroundColor=`#${randomcolor}`
             console.log(newBox)
         })
         Canvas.appendChild(newBox)
         newBox.classList.add("box")
         Canvas.style.setProperty('grid-template-columns', 'repeat(' + GridNumber.value + ', 1fr)');
     }

     RainbowButton.style.outline="6px solid red"
})



 
