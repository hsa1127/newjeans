const songs = [
    { 
        song: "Right Now",
        author:"Gigi, Lolo Zouaï, satomoka",
    },
    { 
        song: "How Sweet (Instrumental)",
        author:"250, Sarah Aarons, Elvira Anderfjard, Oscar Scheller, Stella Bennett, Tove Burman",
    },
    
    { 
        song: "Bubble Gum (Instrumental)",
        author:"250, Oscar Bell, Sophie Simmons",
    },
    
    { 
        song: "ETA",
        author:"임성빈, Gigi, Ylva Dimberg",
    },
    { 
        song: "New Jeans",
        author:"Gigi, Erika de Casier, Fine Glindvad Jensen, 해린(HAERIN)",
    },
    { 
        song: "Super Shy",
        author:"Gigi, 김동현, Erika de Casier, Kristine Bogan, 다니엘(DANIELLE)",
    },
    { 
        song: "Get Up",
        author:"Freekind",
    },
    { 
        song: "OMG",
        author:"Gigi, Ylva Dimberg, 하니(HANNI)",
    },
    { 
        song: "Ditto",
        author:"Ylva Dimberg, 조휴일, 우효(Oohyo), 민지(MINJI)",
    },
    { 
        song: "Attention",
        author:"Gigi, Duckbay(Cosmos Studios Stockholm), 다니엘(DANIELLE)",
    }
]

const song = document.querySelector("#song span:first-child");
const author = document.querySelector("#song span:last-child");


const newjeansSongs = songs[Math.floor(Math.random()*songs.length)];
song.innerText = `Music-Title: ${newjeansSongs.song} /`;
author.innerText = `Author:${newjeansSongs.author}`;
