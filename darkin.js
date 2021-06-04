function raspar(documento){
   document.body.style.textAlign="left"; document.querySelector("h1").style.textAlign="center";
    if(documento.title=="Aatrox - Habilidades e skins dos campeões de League of Legends - Millenium"){
        const p = document.querySelector("p");

        p.innerHTML=documento.querySelector(".article__paragraph").innerHTML;
        p.innerHTML=p.innerHTML.substring(p.innerHTML.indexOf(".")+1); p.style.textAlign="justify"
        //p.style.display="block";
        
        const a = document.createElement("a"); a.href="index.html";
        const img = document.createElement("img");img.src="imagens/arrow_back.png"; img.alt="seta indicando a volta"; 
        document.querySelector("section").appendChild(a)
        img.style.textAlign="left";
        a.appendChild(img)
    }
    else if(documento.title=="Vídeo teaser do novo Aatrox é divulgado; confira"){
        const iframeDiv=document.createElement("div"); iframeDiv.classList="container";

        documento.querySelectorAll("iframe").forEach(iframe=>{
            if(iframe.src=="https://www.youtube.com/embed/n_od4qeNzO4"){
                
                document.querySelector("section").insertBefore(iframeDiv, document.querySelector("a"))
                iframe.style.width="580px";iframe.style.heigth="315px"; iframe.classList="responsive";
                iframeDiv.appendChild(iframe);
            } 
        })
    }
}

function pegarDados(){
    const urls =["https://br.millenium.gg/jogos/jogo-12/entidade-4083", "https://ufogeeks.blogspot.com/2019/05/as-historias-dos-personagens-de-league.html", "https://arenaesports.com.br/league-of-legends/video-teaser-do-novo-aatrox-e-divulgado-confira/"]
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
