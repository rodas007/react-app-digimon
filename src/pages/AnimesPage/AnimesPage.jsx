import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Galery from "../../components/Galery/Galery";
import "./AnimesPage.css";
export default function AnimesPage() {
  const [animes, setAnimes] = useState([]);
  const [findNames, setFindNames] = useState([]);
  
 

const handleChange =e => {
  filtrar(e.target.value);

}

const filtrar=(terminoBusqueda) => {
var ResultadosBusqueda = findNames.filter((animes)=>{
  if(animes.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
    return animes;

  }
return false;
});
setAnimes(ResultadosBusqueda);
}


  useEffect(() => {
    const getAnimes = async () => {
      const res = await axios.get("https://digimoncard.io/api-public/search.php?series=Digimon%20Collectible%20Card%20Game");

      console.log(res.data);
      setAnimes(res.data)
      setFindNames(res.data);
    };

    getAnimes();
  }, []);

  


  

  return (
    <div className="c-animes">

<div>  

<input   placeholder="🔎Buscar personaje"  onChange={handleChange}/>


 </div>

      {animes.map((anime) => (
        
        <Galery key={anime.cardnumber} anime={anime} />
         
        
      ))}
    </div>
  );
}
