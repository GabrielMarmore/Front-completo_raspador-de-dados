function raspar(documento){
    if(documento.title=="Aatrox - Habilidades e skins dos campeões de League of Legends - Millenium"){
        const p = document.querySelector("p");

        p.innerHTML=documento.querySelector(".article__paragraph").innerHTML;
        p.innerHTML=p.innerHTML.substring(p.innerHTML.indexOf("."),0);
        //p.style.display="block";
        
        const a = document.createElement("a"); a.href="index.html"; a.style
        const img = document.createElement("img");img.src="imagens/arrow_back.png"; img.alt="seta indicando a volta"; 
        document.querySelector("section").appendChild(a)
        a.appendChild(img)
    }
    else if(documento.title==""){
        //document.querySelector("section").appendChild(documento.querySelector(""))
    }
}

function pegarDados(){
    const urls =["https://br.millenium.gg/jogos/jogo-12/entidade-4083", "https://ufogeeks.blogspot.com/2019/05/as-historias-dos-personagens-de-league.html", "https://www.youtube.com/watch?v=n_od4qeNzO4"]
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
pegarDados()

//https://cors-anywhere.herokuapp.com/linkdosite
