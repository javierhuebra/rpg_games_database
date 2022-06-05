
const tiempoTranscurrido= Date.now();
const hoy = new Date(tiempoTranscurrido);



console.log(`konda ${cantidad_de_players} `);
function guardar(){
    let idgrupo=document.getElementById("id-grupo").value;
    let arreglaso=[null,null,null,null,null];
    for(let i=0;i<cantidad_de_players;i++){
        console.log(`konda ${cantidad_de_players} `);
        arreglaso[i]=document.getElementById(`texto${i}`).value;
    }

    db.collection("partidas").add({
        black: arreglaso[0],
        red: arreglaso[1],
        green: arreglaso[2],
        blue: arreglaso[3],
        yellow: arreglaso[4],
        date: hoy.toLocaleDateString(),
        hour: hoy.getHours()+ ':' + hoy.getMinutes() + ':' + hoy.getSeconds(),
        id: idgrupo
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
     document.querySelector(".formulario-visible").removeChild(document.querySelector(".para-eliminar-facil"));
     let envioExitoso=document.createElement("DIV");
     envioExitoso.classList.add("envio-exitoso");
     envioExitoso.innerHTML=`<span style='color:yellowgreen'>EL REGISTRO HA SIDO EXITOSO</span><br>
     <span style='color:yellowgreen'>${hoy.toLocaleDateString()} a las ${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}</span><br>
     <span style='color:gray'>ID GRUPO: ${idgrupo}</span><br>
     NEGRO: <span style='color:red'>${arreglaso[0]}</span> puntos <br>
     ROJO: <span style='color:red'>${arreglaso[1]}</span>  puntos <br>
     VERDE: <span style='color:red'>${arreglaso[2]}</span>  puntos <br>
     AZUL: <span style='color:red'>${arreglaso[3]}</span>  puntos <br>
     AMARILLO: <span style='color:red'>${arreglaso[4]}</span>  puntos <br>`;
     
     document.querySelector(".formulario-visible").appendChild(envioExitoso);
     let botonTerminar = document.createElement("button");
     botonTerminar.classList.add("enviar-datos");
     botonTerminar.innerHTML="Terminar";
     let linkeador=document.createElement("A");
     linkeador.setAttribute("href","index.html");

     linkeador.appendChild(botonTerminar);
     document.querySelector(".formulario-visible").appendChild(linkeador);
     
    }

let botonEnviar = document.querySelector(".enviar-datos");
botonEnviar.addEventListener("click",guardar);