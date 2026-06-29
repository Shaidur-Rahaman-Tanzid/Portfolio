import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import PortfolioDetails from '../../components/PortfolioDetails'

const AllRoute = () => { 

  return (
    <div className="App">
       <Switch>
         <Route exact path='/' component={Homepage} />
         <Route path='/home' component={Homepage} />
         <Route path='/portfolio/:id' component={PortfolioDetails} />
       </Switch>
    </div>
  );
}

export default AllRoute;
