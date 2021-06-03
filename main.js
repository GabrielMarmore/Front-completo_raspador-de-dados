function raspar(documento){
    if(documento.title=="Aatrox - Habilidades e skins dos campeões de League of Legends - Millenium"){
        const subtitle = document.createElement("p");

        documento.querySelectorAll("div").forEach(div => {
            if(div.classList=="article__title")document.querySelector("h1").innerHTML=div.innerHTML;//Verifiquei e somente essa div possue essa class
        });

        subtitle.innerHTML=documento.querySelector(".article__chapo").innerHTML;subtitle.style.fontSize="18px";
        document.querySelector("header").appendChild(subtitle);
    }
    /*
    var divNossa = document.createElement("div");
    const divPage = document.querySelector("section div:last-of-type")
    divPage.appendChild(divNossa);*/
}

function pegarDados(){
    const urls =["https://br.millenium.gg/jogos/jogo-12/entidade-4083","https://leagueoflegends.fandom.com/wiki/Darkin"]
    for(ix in urls){
        fetch(`https://cors-anywhere.herokuapp.com/${urls[ix]}`)
            .then(resp => resp.text())
            .then(pg => { 
                let dom = new DOMParser();
                let documento = dom.parseFromString(pg, "text/html");
                raspar(documento);
            })
            .catch(e => document.write(e));
    }
}
function evento(){document.querySelector("button").addEventListener("click", pegarDados);}

//pegarDados()// window.onload carrega todo o doom depois aplica a função, dando f5 fica evidente a mudança de el
//window.onload = pegarDados
window.onload = evento;

//https://cors-anywhere.herokuapp.com/linkdosite
