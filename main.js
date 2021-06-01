function raspar(documento) {
    var divNossa = document.createElement("div");
    documento.querySelectorAll(".post").forEach(div => {
        divNossa.appendChild(div);
    });
    document.body.appendChild(divNossa);
}

function pegarDados() {
    fetch("https://fatecrl.edu.br/blog/noticias/post/santander-disponibiliza-50-mil-bolsas-de-tecnologia-em-parceria-com-a-dio")
        .then(resp => resp.text())
        .then(pg => { 
            let dom = new DOMParser();
            let documento = dom.parseFromString(pg, "text/html");
            raspar(documento);
        })
        .catch(e => document.write(e));
}

function evento() {
    document.querySelector("button").addEventListener("click", pegarDados);
}

window.onload = evento

//https://cors-anywhere.herokuapp.com/linkdosite
