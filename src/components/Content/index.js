import React from 'react';

const Content = (props) => {
  
  return (
    <div>
        {
          props.passaDati.map((elem, i) => {
            return <a href="#"><img key= {i} src={elem.box_art_url}></img></a>
          })
        }
    </div>
  )
}

export default Content;
