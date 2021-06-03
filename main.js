function raspar(documento) {
    const subtitle = document.createElement("p");
    var divNossa = document.createElement("div");
    //documento.querySelectorAll(".style__Desc-sc-1o884zt-9 hZPZqS").forEach(div => {
    documento.querySelectorAll("div").forEach(div => {
        if(div.classList=="article__title")document.querySelector("h1").innerHTML=div.innerHTML;//Verifiquei e somente essa div possue essa class
    });
    subtitle.innerHTML=documento.querySelector(".article__chapo").innerHTML;subtitle.style.fontSize="18px";

    const divPage = document.querySelector("section div:last-of-type")
    document.querySelector("header").appendChild(subtitle);
    //divPage.appendChild(divNossa);
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

//function evento() {document.querySelector("button").addEventListener("click", pegarDados);}

pegarDados()// window.onload carrega todo o doom depois aplica a função, dando f5 fica evidente a mudança de el
//window.onload = pegarDados

//https://cors-anywhere.herokuapp.com/linkdosite
