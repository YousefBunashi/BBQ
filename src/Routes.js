import BbqList from "./components/BbqList";
import ButcheryList from "./components/ButcheryList";

import BbqDetail from "./components/BbqDetail";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import ButcheryDetail from "./components/ButcheryDetail";
import { observer } from "mobx-react";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/butcheries:butcherySlug">
        <ButcheryDetail />;
      </Route>
      <Route path="/butcheries">
        <ButcheryList />
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
