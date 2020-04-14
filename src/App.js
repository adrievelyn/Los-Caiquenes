import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";


import Home from "./Components/Home";
import Directive from "./Components/Directive";


/*  
            <Route path="/ProductsList">
              <ProductsList />
            </Route>
            <Route path="/SatisfactionClients">
              <SatisfactionClients />
            </Route>
            <Route path="/singleorder">
              <SingleOrder />
            </Route>*/

/*<Route exact path="/badges">
              <Badges />
            </Route>

            <Route exact path="/badges/new">
              <BadgeNew />
            </Route>*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
           <Route exact path="/">
              <Home />
           </Route>

           <Route exact path="/Directive" id='p02'>
              <Directive />
           </Route>
          
          </Switch>
      </BrowserRouter>
    </div>
   
  );
}

export default App;


