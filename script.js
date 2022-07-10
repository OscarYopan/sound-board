const aplausos = document.querySelector('#apl')
const vaias = document.querySelector('#vai')
const suspiro = document.querySelector('#sus')
const tada = document.querySelector('#tad')
const vitoria = document.querySelector('#vit')
const erro = document.querySelector('#err')

aplausos.addEventListener('click', () =>{
  document.querySelector('#aplausos').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1543980932-b5fc649a8000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"; 
})

vaias.addEventListener('click', () =>{
  document.querySelector('#vaias').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1632405007634-bac6b3e8ae46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"; 
})

suspiro.addEventListener('click', () =>{
  document.querySelector('#suspiro').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"; 
})

tada.addEventListener('click', () =>{
  document.querySelector('#tada').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1503266980949-bd30d04d0b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"; 
})

vitoria.addEventListener('click', () =>{
  document.querySelector('#vitoria').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1527871369852-eb58cb2b54e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80)"; 
})

erro.addEventListener('click', () =>{
  document.querySelector('#erro').play();
  document.querySelector('.imagem').style.backgroundImage = "url(https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80)"; 
})