import React, { useEffect, useState } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import Stampa from '../stampaEl/index.js'

function Cerca() {
    const [cat2, setCat] = useState([])
    const [inserisci, setIns]=useState("")
    var categoria="";


    function settaCategoria(){
    categoria = document.getElementById("CatSelez").value
        setIns(categoria)
    //console.log("categorie: ",inserisci)
}


useEffect(()=>{
    searchCategories({ query: `/${inserisci}` })
      .then(response => setCat(response.data))
    }, [inserisci])
    //console.log("setcat: ",cat2)



return(
    <div>
    <select id="CatSelez">
    <option value="">Seleziona una categoria</option>
                <option value="Visual Novel">Visual Novel</option>
                <option value="RTS">RTS</option>
                <option value="Metroidvania">Metroidvania</option>
                <option value="Mondo aperto">Mondo aperto</option>
                <option value="IRL">IRL</option>
                <option value="Roguelike">Roguelike</option>
                <option value="Sport">Sport</option>
                <option value="Giochi di guida/corse">Giochi di guida/corse</option>
                <option value="Giochi di carte e da tavolo">Giochi di carte e da tavolo</option>
                <option value="Flipper">Flipper</option>
                <option value="Piattaforma">Piattaforma</option>
                <option value="Horror">Horror</option>
                <option value="Stealth">Stealth</option>
                <option value="Gioco da casinò">Gioco da casinò</option>
                <option value="Giochi educativi">Giochi educativi</option>
                <option value="Oggetti nascosti">Oggetti nascosti</option>
                <option value="Giochi musicali">Giochi musicali</option>
                <option value="4X">4X</option>
                <option value="Sparatutto">Sparatutto</option>
                <option value="Rompicapo">Rompicapo</option>
                <option value="Arcade">Arcade</option>
                <option value="Gioco di avventura">Gioco di avventura</option>
                <option value="Mistero">Mistero</option>
                <option value="Strategia">Strategia</option>
                <option value="Autobattler">Autobattler</option>
                <option value="Gioco su dispositivi mobili">Gioco su dispositivi mobili</option>
                <option value="Gioco indie">Gioco indie</option>
                <option value="MMO">MMO</option>
                <option value="MOBA">MOBA</option>
                <option value="Shoot 'Em Up">Shoot 'Em Up</option>
                <option value="Survival">Survival</option>
                <option value="Simulazione">Simulazione</option>
                <option value="Simulatori di volo">Simulatori di volo</option>
                <option value="FPS">FPS</option>
                <option value="Azione">Azione</option>
                <option value="Picchiaduro">Picchiaduro</option>
                <option value="Overlay di gioco">Overlay di gioco</option>
                <option value="Creative">Creative</option>
                <option value="Punta e clicca">Punta e clicca</option>
                <option value="Fazione: Syndicate">Fazione: Syndicate</option>
                <option value="Livello: 60">Livello: 60</option>
    </select>
    <button onClick={settaCategoria}>Cerca</button>
    <br></br>
    <Stampa stampaElem={cat2}></Stampa>
    </div>
)
    }
   
export default Cerca