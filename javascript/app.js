//funcion mayor edad del index//

function mostrarMensaje() {
    var edad = window.confirm('¿Sos mayor de 18 años?');
        if (edad === true) {
            window.alert('¡Bienvenido/a a BioSer!');
        } else { 
            window.alert('Estas ingresando bajo tu propia responsabilidad');
        }
    
    }


    let facebook = document.querySelector(".facebook");
facebook.addEventListener("click",()=>{

    let decision =confirm("Vas a salir de la página. ¿Estás seguro?");
    if (decision == true){
        location.href= "https://www.facebook.com/bioserokk/"
        
    }else{
        alert("Vas a permanecer en el sitio.");
    }


})
let instagram = document.querySelector(".instagram");
instagram.addEventListener("click",()=>{

    let decision =confirm("Vas a salir de la página. ¿Estás seguro?");
    if (decision == true){
        location.href= "https://www.instagram.com/bioser_ok/"
        
    }else{
        alert("Vas a permanecer en el sitio.");
    }


})

let whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click",()=>{

    let decision =confirm("Vas a salir de la página. ¿Estás seguro?");
    if (decision == true){
        location.href= "https://api.whatsapp.com/send?phone=3364620890"
        
    }else{
        alert("Vas a permanecer en el sitio.");
    }


})
