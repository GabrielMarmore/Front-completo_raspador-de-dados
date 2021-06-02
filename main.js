function raspar(documento) {
    var divNossa = document.createElement("div");
    //documento.querySelectorAll(".style__Desc-sc-1o884zt-9 hZPZqS").forEach(div => {
    documento.querySelectorAll(".article__chapo").forEach(p => {
        divNossa.appendChild(p);
    });
    const divPage = document.querySelector("section div:last-of-type")
    divPage.appendChild(divNossa);
}

function pegarDados() {
    //fetch("https://cors-anywhere.herokuapp.com//https://br.leagueoflegends.com/pt-br/champions/aatrox/")
    fetch("https://cors-anywhere.herokuapp.com/https://br.millenium.gg/jogos/jogo-12/entidade-4083")
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
