function cadastrarNewsLetter() {
    
   let email= document.getElementById("campo-email").value
    
    
    alert(email);
}

function mostrarMenu() {

    let menu = document.getElementById ("menu")

    if ( getComputedStyle(menu).display == "none"){
    menu.style.display = "flex"; 
   } else {
    menu.style.display = "none";
   }
    
}

function mostrarmenu() {
   let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == "none"){
      menu.style.display = "flex"
    } else{
      menu.style.display = "none"
      
    }

   
   }




   function cadastrarNewsletter() {
       alert("Usuário cadastrado com sucesso")
   }

$(document).ready(function() {

   let slideAtual = 1
   let listaSlides = ["banner1","banner2","banner3"]

   setInterval(mudarSlide, 2000)

   function mudarSlide() {

       if(slideAtual > 0){
          $("#carrossel").removeClass(listaSlides[slideAtual - 1])
       }else{
          $("#carrossel").removeClass(listaSlides[2])
       }

       $("#carrossel").addClass(listaSlides[slideAtual])
   
       console.log("slide atual é:", slideAtual)
       slideAtual++

       if(slideAtual > 2 ){
          slideAtual = 0
       }

   }

})
