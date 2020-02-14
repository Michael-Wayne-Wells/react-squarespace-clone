import React from 'react';
import board from './board.jpg'

function HeaderBody() {
return(
  <div>
  <style>{`
    .toptext {

      padding-top: 10%;
    }
    .headerText{

      padding-left: 10%;
      color: white;
    }
    .header-body{
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${board}');
      background-size: 100%;
      background-position: center;
      height: 600px;
    }
    `}</style>

    <p className="toptext headerText">OUR TEAM</p>
    <h1 className="headerText">POWERED BY PEOPLE</h1>
    </div>
  )

}

export default HeaderBody;
