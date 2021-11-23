const title=document.querySelector(".js-arrival")
const select=document.querySelector(".js-select")
const selectAll=select.querySelectorAll("select")
const result=document.querySelector("#result")

function handleTitleClick(){
    const clickedClass="clicked"
    title.classList.toggle(clickedClass)
}

function handleMouseEnter(){
    console.log("onMouse")
}

function submitSelect(e){
    e.preventDefault()
    console.log(e)
    const input1=selectAll[0].value
    console.log(input1)
    if(input1.length>0){
        const array={"arrival":input1}
        console.log(array)
        select.classList.add("hidden")
        result.classList.toggle("hidden")
        result.innerText=`you chose ${input1}`
        localStorage.setItem("input",`${array}`)
    }
    

}

select.addEventListener("submit", submitSelect)
