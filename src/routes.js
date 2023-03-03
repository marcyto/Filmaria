
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';

import Home from './pages/Home';
import Filmes from './pages/Filmes';
import Salvos from './pages/Salvos';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filmes} />
        <Route exact path="/salvos" component={Salvos}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;