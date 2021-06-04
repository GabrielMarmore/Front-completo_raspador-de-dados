function raspar(documento){
    if(documento.title=="Aatrox - Habilidades e skins dos campeões de League of Legends - Millenium"){
        const subtitle = document.createElement("p");
        const p = document.querySelector("div:first-child p");

        documento.querySelectorAll("div").forEach(div => {
            if(div.classList=="article__title")document.querySelector("h1").innerHTML=div.innerHTML;//Verifiquei e somente essa div possue essa class
        });

        p.innerHTML=documento.querySelector(".article__paragraph").innerHTML;
        p.innerHTML=p.innerHTML.substring(0,p.innerHTML.indexOf("."));
        p.style.textAlign="justify"; p.innerHTML+="<br><a href='darkin.html'>Conheça mais da lore do Aatrox clicando aqui.</a>"
        subtitle.innerHTML=documento.querySelector(".article__chapo").innerHTML;subtitle.style.fontSize="20px";
        
        document.querySelector("header").appendChild(subtitle);

        const a = documento.createElement("a"); a.href="darkin.html"; a.classList="icon";
        document.querySelector("div:first-child").insertBefore(a,p);
        a.appendChild(documento.querySelector(".c-card__avatar img"))
    }
    /*
    else if(documento.title=="Darkin | League of Legends Wiki | Fandom"){
        
    }
    var divNossa = document.createElement("div");
    const divPage = document.querySelector("section div:last-of-type")
    divPage.appendChild(divNossa);*/
}

function pegarDados(){
    const urls =["https://br.millenium.gg/jogos/jogo-12/entidade-4083","https://leagueoflegends.fandom.com/wiki/Darkin", "https://leagueoflegends.fandom.com/pt-br/wiki/Darkin"]
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
    document.querySelector("button").disabled="disabled";
}
function evento(){document.querySelector("button").addEventListener("click", pegarDados);}

//pegarDados()// window.onload carrega todo o doom depois aplica a função, dando f5 fica evidente a mudança de el
//window.onload = pegarDados
window.onload = evento;

//https://cors-anywhere.herokuapp.com/linkdosite
