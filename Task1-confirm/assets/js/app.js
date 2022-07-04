function Site(){
    if(confirm('Dou You Want Enter Site?')){
        document.getElementById("ok").style.display = ('block')
        document.getElementById("btn").style.display = ('none')
        document.body.style.backgroundColor = "cornsilk"
    }
    else{
        document.getElementById("btn").style.display = ("none")
    }
}