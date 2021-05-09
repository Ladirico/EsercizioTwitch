import './App.css';
import {useState} from 'react'
import Content from './components/Content';
import Navbar from './components/Navbar';
import useTwitchAuthentication from './hooks/useTwitchAuthentication';



function App() {
  const isAuthenticated = useTwitchAuthentication();
  const[data,setData] = useState([]);
  const [categ, setCat] = useState([])


  if (!isAuthenticated) {
    return null;
  }

  function getTop(data){ //ti aggiorni data con i valori dei videogiochi
    setData(data)
  }

  function getCat(categ){ //ti aggiorni categ con i valori delle categorie
    setCat(categ)

  }
  
  console.log("queste sono le categorie: ",categ)
  console.log("questi sono i giochi", data)

  return (
    <div className="App">
      <Navbar setCategories={getCat} setTopGames={getTop} />
      <Content passaCateg={categ} passaDati={data}/>
      
    </div>
  );
}

export default App;
