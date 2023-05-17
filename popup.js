var start=document.querySelector(".start-recording")
var stop=document.querySelector(".stop-recording")

// document.addEventListener("*",event=>{
//   console.log("****************************",event.path,"************************")
// })

start.addEventListener("click",()=>{
    stop.style.display="block"
    start.style.display="none"

    // chrome.runtime.sendMessage

})

stop.addEventListener("click",()=>{
    stop.style.display="none"
    start.style.display="block"
})