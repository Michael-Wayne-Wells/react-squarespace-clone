import React from 'react';
import NavigationBar from './NavigationBar'
import HeaderBody from './HeaderBody'
import SubHeader from './SubHeader'
import { Switch, Route } from 'react-router-dom';
import board from './board.jpg'
function Header() {
  return(
    <div className="header-body">
    <style>{`

      `}</style>
    <NavigationBar/>
    <Switch>
      <Route path='/team' component={HeaderBody}/>
    </Switch>

    <SubHeader/>
    </div>
  )
}

export default Header;
