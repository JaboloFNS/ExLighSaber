let paginaPergunta = document.querySelector ("#pagina-pergunta");
let paginaSabre = document.querySelector("#pagina-sabre");
let botaoSith = document.querySelector(".sith");
let botaoJedi = document.querySelector(".jedi");
let lamina = document.querySelector(".lamina");

function escolherSith(){
    paginaPergunta.style.display="none";
    paginaSabre.style.display="flex";   
}

function escolherJedi(){
    paginaPergunta.style.display="none";
    paginaSabre.style.display="flex";
    lamina.style.background = "linear-gradient(90deg, #049c04, #9ce99c, #049c04)";
    lamina.style.boxShadow = "0 0 50px #049c04";   
}

function alternarSabre(){
    if(lamina.style.opacity ==1){
    lamina.style.opacity=0;
    }
    else{
    lamina.style.opacity=1;
    }
}

botaoSith.onclick = escolherSith;
botaoJedi.onclick = escolherJedi;
paginaSabre.onclick = alternarSabre;





// Registra o service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('./service-worker.js')
    .then(function() { 
        console.log('Service Worker Registered'); 
    }, function(error){
        console.error(error);
    });
}