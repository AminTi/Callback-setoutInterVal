 const sleepy = document.querySelector("#sleepyhead")
 const weakup = document.querySelector("#wakeup")


weakup.addEventListener("click", function(){

const timerId = setTimeout(function(){

    sleepy.textContent = "😩 Why did you wake me up?s"

}, 2000)


})