import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import MainComponent from "./components/mainComponent";
import Slide1Component from "./components/slide1Component";
import Slide2Component from "./components/slide2Component";
import Slide3Component from "./components/slide3Component";
import PracticalComponent from "./components/practicalComponent";
import Slide4Component from "./components/slide4Component";
import DemoComponent from "./components/Demo/demoComponent";
function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <Switch>
        <Route path="/" exact component={MainComponent} />
        <Route path="/slide1" exact component={Slide1Component} />
        <Route path="/slide2" exact component={Slide2Component} />
        <Route path="/slide3" exact component={Slide3Component} />
        <Route path="/practical" exact component={PracticalComponent} />
        <Route path="/demo" exact component={DemoComponent} />
        <Route path="/slide4" exact component={Slide4Component} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
