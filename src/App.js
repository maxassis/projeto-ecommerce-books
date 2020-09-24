import React from 'react';
import GlobalStyles from './styles/global'
import Home from './Pages/Home/index'
import Done from './Pages/Done/index'
import Business from './Pages/Bussiness/index'
import Cart from './Pages/Cart/index'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {StateProvider} from './context/contextState' 


function App() {
  return (
   <>
   <StateProvider>
   <GlobalStyles/>
   <BrowserRouter>
      
      <Switch>

        <Route exact path='/business'>
          <Business/>
        </Route>

        <Route exact path='/cart'>
          <Cart/>
        </Route>

        <Route exact path='/done'>
          <Done/>
        </Route>

        <Route exact path='/'>
          <Home/>
        </Route>

      </Switch>
    
    </BrowserRouter>
    
    </StateProvider>
   
   
   </>
  );
}

export default App;
