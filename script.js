
const send = document.getElementById("send").addEventListener("click", function(){
    

    let zpall = document.getElementById("zpprint").value
    let zpprintes = parseInt(zpall)



if (document.getElementById("classauto").textContent === "Comfort"){
    let zpupclas = document.getElementById("zpvasyas")
    if (zpupclas) {
        zpupclas.textContent = 4000 + zpprintes;
    }

}



if (document.getElementById("classautostas").textContent === "Luxe") {
    let zpupcla = document.getElementById("zpstas");
    if (zpupcla) {
        zpupcla.textContent = 5000 + zpprintes;
    }
}

if (document.getElementById("classautodima").textContent === "Econom") {
    let zpupcl = document.getElementById("zpdima");
    if (zpupcl) {
        zpupcl.textContent = 3000 + zpprintes;
    }
}

if (document.getElementById("racestas" || "rasedima" || "rasevasyas").textContent === "5"){
    let zpupclas = document.getElementById("zpvasyas" || "zpdima" || "zpstas");
    let curzp = parseInt(zpupclas.textContent);
    zpupclas.textContent = curzp + 3000;
}else if (document.getElementById("racestas" || "rasedima" || "rasevasyas").textContent > "5"){
    let zpupclas = document.getElementById("zpvasyas" || "zpdima" || "zpstas");
    let curzp = parseInt(zpupclas.textContent);
    zpupclas.textContent = curzp + 5000;
}


});