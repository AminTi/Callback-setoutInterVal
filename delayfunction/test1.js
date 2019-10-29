function namn(){
    console.log(" Hej ")
}

function efterNamn(){
    console.log("titi")
}

function ville(){

    console.log("kenita")
}
   

function timer(callback){

setTimeout(function() {
  console.log(" Du valde !!!") 
  callback()
}, 400)
}

timer(ville)
