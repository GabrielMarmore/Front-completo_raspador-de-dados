function raspar(documento){
    if(documento.title=="Aatrox - Habilidades e skins dos campeões de League of Legends - Millenium"){
        const subtitle = document.createElement("p");
        const p = document.querySelector("div:first-child p");

        documento.querySelectorAll("div").forEach(div => {
            if(div.classList=="article__title")document.querySelector("h1").innerHTML=div.innerHTML;
        });

        p.innerHTML=documento.querySelector(".article__paragraph").innerHTML;
        p.innerHTML=p.innerHTML.substring(0,p.innerHTML.indexOf("."));
        p.style.textAlign="justify"; p.innerHTML+="<br><a href='darkin.html'>Conheça mais da lore do Aatrox clicando aqui.</a>"
        subtitle.innerHTML=documento.querySelector(".article__chapo").innerHTML;subtitle.style.fontSize="20px";
        
        document.querySelector("header").appendChild(subtitle);

        const a = documento.createElement("a"); a.href="darkin.html"; a.classList="icon";
        document.querySelector("div:first-child").insertBefore(a,p);
        a.appendChild(documento.querySelector(".c-card__avatar img"))
        //skils
        const h2 = document.createElement("h2");h2.innerHTML=documento.querySelectorAll(".article__subtitle")[1].innerHTML;
        document.querySelector("section").insertBefore(h2, document.querySelector("div:last-child"));

        const arraySub=documento.querySelectorAll("div.w-list-items__subtitle"); //array com nome das skills
        const arrayImg=documento.querySelectorAll("div.w-list-items__media"); //array com img das skills
        for(let i=0;i<arrayImg.length; i++){
            document.querySelector("div:last-child").insertBefore(arrayImg[i],document.querySelector("button"));

            const pSkill = document.createElement("p");
            arrayImg[i].addEventListener("click", ()=>{
                if(h2.innerHTML!="Habilidades"){
                    document.querySelector("div:last-child").removeChild(document.querySelector("div:last-child p"))
                }
                
                h2.innerHTML=arraySub[i].innerHTML;
                pSkill.innerHTML=documento.querySelectorAll(".w-list-items__infos")[i].innerHTML;
                document.querySelector("button").parentNode.insertBefore(pSkill,document.querySelector("button"));

                document.querySelector("iframe").src=documento.querySelectorAll("iframe")[i+1].src
            })
        }
    }

    else if(documento.title=="AATROX | As histórias dos personagens de League of Legends - #01"){
        const iframeDiv=document.createElement("div"); iframeDiv.classList="container";
        documento.querySelectorAll("iframe").forEach(iframe=>{
            if(iframe.src=="https://www.youtube.com/embed/soQ9bukwAPs"){
                document.querySelector("button").parentNode.insertBefore(iframeDiv,document.querySelector("button"));
                iframe.style.width="580px";iframe.style.heigth="315px"; iframe.classList="responsive";
                iframeDiv.appendChild(iframe);
            }
        })
    }
}

function pegarDados(){
    const urls =["https://br.millenium.gg/jogos/jogo-12/entidade-4083","https://ufogeeks.blogspot.com/2019/05/as-historias-dos-personagens-de-league.html"]
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
