import React, { useEffect, useState } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';

import Cerca from '../Cerca';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import Content from '../Content';


const Navbar = (props) => {
  const { loading, error, user } = useProfile();
  const [data, setData] = useState([]) 
  const [cate1, setCate1] = useState([])

//1) mi richiamo la funzione getTopGames per riprendermi i primi 10 giochi 
  useEffect(()=>{
    getTopGames({ after: '', before: '', first: 10, width: '188', height: '250', })
      .then(response => setData(response.data)) //inserisco i giochi nello stato che chiamo data
    }, [])

  function getTopgames() { //callback per rimandare i valori a app
    props.setTopGames(data) //mi rimando il valore di data (i primi 10 giochi)
  }

  useEffect(()=>{
  searchCategories({ query: '/' })
    .then(response => setCate1(response.data))
  }, [])
  
    function getCategories() { //callback uguale, ma mi riprendo le categorie
    props.setCategories(cate1)
  }
  console.log("categorie in navbar", cate1)




  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        <Router>
        <Link to='/Categorie'>Sfoglia categorie</Link>
        <Link to='/TopGames'>Top games</Link>
        <br></br>
        <br></br>
        <Switch>
        <Route path='/Categorie' component={Cerca}></Route>
      <Route path='/TopGames' component={Content}></Route>
      </Switch>
      </Router>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
