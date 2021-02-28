import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./views";
import Services from './views/Services';
import Ecommerce from './views/Commerce';
import Branding from "./views/Branding";
import  Work  from "./views/Work";
import VisualIdentity from "./views/identity";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/services" component={Services} exact />
          <Route path="/ecommerce" component={Ecommerce} exact />
          <Route path="/branding" component={Branding} exact />
          <Route path="/work" component={Work} exact />
          <Route path="/visual" component={VisualIdentity} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
