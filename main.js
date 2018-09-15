let paginaPergunta = document.querySelector ("#pagina-pergunta");
let paginaSabre = document.querySelector("#pagina-sabre");
let botaoSith = document.querySelector(".sith");
let botaoGrey = document.querySelector(".grey")
let botaoJedi = document.querySelector(".jedi");
let lamina = document.querySelector(".lamina");
let cabo = document.querySelector(".cabo");
let botaoBack = document.querySelector (".back");
let somSabre = new Audio ("Lightsaber.mp3")

function retornar(){
    paginaSabre.style.display="none";
    paginaPergunta.style.display="flex";
}

function escolherSith(){
    paginaPergunta.style.display="none";
    paginaSabre.style.display="flex";
    lamina.style.background="linear-gradient(90deg, #ff0000, rgb(250, 76, 76), #ff0000)";
    lamina.style.boxShadow= "0 0 50px #ff0000";   
}

function escolherGrey(){
    paginaPergunta.style.display="none";
    paginaSabre.style.display="flex";
    lamina.style.background="linear-gradient(90deg, #a1a1a1, #cacaca, #a1a1a1)"
    lamina.style.boxShadow = "0 0 50px #a1a1a1";
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
    somSabre.play();
    }
}

botaoBack.onclick = retornar;
botaoGrey.onclick = escolherGrey;
botaoSith.onclick = escolherSith;
botaoJedi.onclick = escolherJedi;
cabo.onclick = alternarSabre;





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