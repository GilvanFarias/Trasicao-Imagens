let time = 5000, /*Tempo de rotação do slider*/
    currentImageIndex = 0,
    images = document
                  .querySelectorAll("#slider img")//vai no HTML  e pega a coleççao de imagem
    max = images.length; //pega máximo de imagem e coloca em uma lista com se fosse um array começando por 0

function nextImage(){

  images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start(){

    setInterval(()=>{ //Executa uma função a cada momento no caso time
      //troca de imagem
    nextImage() //está executando a função nextImage a cada 2000 mili segundos ou a cada 2 segundos
    
  }, time)
}

    window.addEventListener("load", start)