let presionado=false;
function crearTablas(){
    if(presionado==false){
        let codigo=document.getElementById("code").value;
        let fragmento = document.createDocumentFragment();//hay que hacerl ocon esto porque gaasta bastantes recursos sino
        let i=0;
        db.collection("partidas").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if(codigo==doc.data().id){
                    let div=document.createElement("DIV");
                    div.classList.add("partida");
                    div.innerHTML=`<h4>${doc.data().date}-${doc.data().hour}</h4><br>Negro: ${doc.data().black}<br>
                    Rojo: ${doc.data().red}<br>Verde: ${doc.data().green}<br>
                    Azul: ${doc.data().blue}<br>Amarillo: ${doc.data().yellow}<br>`
                     //console.log(codigo);
                    fragmento.appendChild(div);
                    console.log(fragmento);
                    i++;
                    }
            
                });
                document.querySelector(".tablas").appendChild(fragmento);
                document.querySelector(".mensaje").innerHTML=`Hay ${i} partidas <br>registradas en ese grupo<br>para repetir la operacion presione volver`
        });
    
    presionado=true;
    }
    
}

document.getElementById("ver").addEventListener("click",crearTablas);