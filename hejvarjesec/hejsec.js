const stop = document.querySelector("#stop")
const msg = document.querySelector("#msg")



const intervalID = setInterval(function() {
    msg.textContent = msg.textContent + "hej"

  }, 1000)
  

  stop.addEventListener("click", function(){
        
    clearInterval(intervalID)
    msg.textContent = msg.textContent + "Okey..!"

  })
