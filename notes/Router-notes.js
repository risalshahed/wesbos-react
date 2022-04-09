import react from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from './StorePicker';
import App from './App';
import NotFound from "./NotFound";

const Router = () => (
  // BrowserRouter r Switch Tag er vitore shob Routes dte hbe
  <BrowserRouter>
    <Switch>
      {/* Swtich Tag kivabe kaj kre ??? */}
      {/* well, eita prothome nicher 1st route khujbe, na paile 2nd ta khujbe, setao na paile 3rd i.e. NotFound route a jump korbe */}
      <Route exact path='/' component={StorePicker} />
      {/* explanation, 1st rotue exact path khuje, jokhn exact path '/' i.e. homepage paay, tohkn ei route StorePicker component render korbe  */}

      <Route path='/store/:storeId' component={App} />
      {/* explanation, 2nd rotue arekta path khuje, jokhn path 'anythingBUTnotHOME' hoy, tohkn ei route App component render korbe  */}

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;