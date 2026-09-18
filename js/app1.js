let i= 1;
const imagem = document.getElementById("foto");
function proxima(e) {
    e.preventDefault();
    if (i< 6) {   
        i = i + 1;
     }
     imagem.setAttribute("src", `img/foto${i}.jpg`);    

}

const prox = document.getElementById("prox");
prox.addEventListener("click", proxima);

const ant = document.getElementById("ant");
ant.addEventListener("click", anterior);

function anterior(e) {
    e.preventDefault();
    if (i > 1) {
        i = i - 1;
    }
    imagem.setAttribute("src", `img/foto${i}.jpg`);
}

function selecionar(e) {
    e.preventDefault();
    i = cbbox.value;
    imagem.setAttribute("src", `img/foto${i}.jpg`);
}
 
const cbbox = document.getElementById("combobox");
cbbox.addEventListener("change", selecionar);

const opacidade = document.getElementById("opacidade");
opacidade.addEventListener("input", function() {
    imagem.style.opacity = opacidade.value;
});0

