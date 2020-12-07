import BbqList from "./components/BbqList";
import BurgerList from "./components/BurgerList";
import { GlobleStyle } from "./styles";
import bbqsStore from "./stores/bbqStore";
import BbqDetail from "./components/BbqDetail";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import BurgerDetail from "./components/BurgerDetail";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/burgers/:burgerSlug">
        <BurgerDetail />;
      </Route>
      <Route path="/burgers">
        <BurgerList />
      </Route>
      <Route path="/bbqs/:bbqSlug">
        <BbqDetail />;
      </Route>
      <Route path="/bbqs">
        <BbqList />
      </Route>
      <Route path="/"></Route>
    </Switch>
  );
};
export default observer(Routes);
