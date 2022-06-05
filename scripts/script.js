/* function animacionGirar(){
    let j=100;
    var rodar= setInterval(()=>{
        var aleatorio;
            aleatorio=parseInt(Math.random()*3+1);
            if(arregloTestigos[aleatorio-1]==false){
                arregloPlayers[aleatorio-1].classList.add("seleccionado");
            }
            
            
            setTimeout(() => {
                if(arregloTestigos[aleatorio-1]==false){
                    arregloPlayers[aleatorio-1].classList.remove("seleccionado")
                }
            ;
        }, 100);
        
        
        setTimeout(()=>{clearInterval(rodar)},5000);
        
    },j);

    
} */

let arregloPlayers=[];
let arregloBackup=[];
let arregloB=[];
let i;
for(i=0;i<3;i++){
    arregloPlayers[i]=document.getElementById("mono"+i);
    console.log(`El mono ${i} es ${arregloPlayers[i]}`);
   
}

let numerado=false;
function numerarMono(){
    let jugadores =arregloPlayers.length;
    let i;
    
    let valorRand;
    if(jugadores>=4){
        document.getElementById("mono3").classList.remove("aparecer");
    }
    
    if(jugadores>=5){
        document.getElementById("mono4").classList.remove("aparecer");
    }
    
    for(i=1;i<=jugadores;i++){
        valorRand=parseInt(Math.random()*((jugadores+1)-i)+1);
        console.log(valorRand);
        arregloPlayers[valorRand-1].classList.add("ganador");
        arregloPlayers[valorRand-1].innerHTML=i;
        arregloBackup[i]= arregloPlayers.splice((valorRand-1),1);
        borrar=true;
    }
    numerado=true;
    console.log(arregloPlayers.length);
console.log(arregloBackup);
}
console.log(arregloPlayers.length);

let t=3;
function agregarElemento(){
    if(numerado==false){
        if(t<5){
            let flexItem = document.createElement("DIV");
            flexItem.classList.add("flex-item");
            flexItem.setAttribute("id",`mono${t}`);
            flexItem.classList.add("aparecer");
            document.querySelector(".flex-box2").appendChild(flexItem);
            arregloPlayers.push(flexItem);
       t++;
       }
       cantidad_de_players=t;
    }
    
   
    console.log(arregloPlayers);
}
let agregado=false;
function agregarInput(){
    let divContenedor = document.querySelector(".formulario-escondido");
    if(agregado==false){
        for(i=0;i<t;i++){
            let divImagen = document.createElement("DIV");
            let inputText = document.createElement("INPUT");
            divImagen.classList.add("img-datos");
            divImagen.setAttribute("id",`img-mono${i}`);
            inputText.classList.add("texto");
            inputText.setAttribute("id",`texto${i}`);
            inputText.setAttribute("type","number");
            document.getElementById(`agregado${i}`).appendChild(divImagen);
            document.getElementById(`agregado${i}`).appendChild(inputText);
    
        }
        agregado=true;
        divContenedor.classList.add("formulario-visible");
        divContenedor.classList.remove("formulario-escondido");
    }
    
}
document.getElementById("turnos").addEventListener("click",numerarMono);
document.getElementById("sumar").addEventListener("click",agregarElemento);
document.getElementById("registrar").addEventListener("click",agregarInput);

    
    
   
   
    

    
 
