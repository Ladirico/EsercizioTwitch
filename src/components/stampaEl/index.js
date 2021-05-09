import React from 'react';

function Stampa(props){
    return (
        <div>
          {
                props.stampaElem.map((elem1, i)=>{
                   return ( <a href="#"><img key= {i} src={elem1.box_art_url}></img></a>)
                })
            }
        </div>
    )
        }
        export default Stampa