let v = parseInt(prompt("immetti voto: "))

if (v==30) {
    console.log("eccellente")
}
else if (v>=27&& v<29){
    console.log("ottimo")
}
else if (v>=24&&v<27){
    console.log("distinto")
}
else if (v>=21&&v<24){
    console.log("ottimo")
}
else if (v>=18 && v<21){
    console.log("sufficiente")
}
else if ( v<18){
    console.log("insufficiente")
}
else{
    console.log("inserire un voto valido")
}