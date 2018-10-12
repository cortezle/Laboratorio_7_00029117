/*Usando "document.getElementById" */
var container;
container= document.getElementById("c1");
/**/
container.innerText="Hola Mundo";
/* */
container.style.backgroundColor="#000000";
container.style.color ="#1cb723";
container.style.width="200px";
container.style.height="200px";
container.innerHTML="<input type='text' placeholder='escriba su text' >";



/* Usando documentELementsbyCLassNAme*/
var containers;
containers = document.getElementsByClassName="c2";
/* */
containers = document.querySelectorAll(".c2");
containers.forEach(element => {
    element.style.backgroundColor="#009999";
    /* */
    element.innerHTML="<input type='text' placeholder='escriba su text' >";
});

/*Envento */
var boton = document.getElementById("btn-click");
boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

var btnCopy = document.getElementById("btnCopy");
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}

/* */
/**/