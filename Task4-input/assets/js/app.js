function Check(){
var text = document.getElementById("text").value
var No=text.slice(-3,-2)
console.log(No)

if(No==1){
    document.body.style.backgroundColor = "yellow"
    document.getElementById("shedule").innerHTML = "Morning Group"
}

else if(No==2){
    document.body.style.backgroundColor = "red"
    document.getElementById("shedule").innerHTML = "Afternoon group"
}

else if(No==3){
    document.body.style.backgroundColor = "black"
    document.getElementById("shedule").innerHTML = "Evening Group"
    document.body.style.color = "White"
}

else{
    document.body.style.backgroundColor = "White"
}
}