// eslint-disable-next-line
import React, { setState, useEffect, Suspense } from "react"
// eslint-disable-next-line
import ReactDOM from "react-dom"
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// eslint-disable-next-line
import Style from "./style.css"

import About from "./components/About"
import PlacesToVisit from "./components/PlacesToVisit"
import AreaMap from "./components/AreaMap"
import TopNav from "./components/TopNav"
import Content from "./components/Content"

export default function App() {
  return (
    <Suspense fallback="loading">
    <div id="appBody">

      <Router basename="/visit_southampton">

      <div id="main">
      
        <div>
            <TopNav />
        </div>

        <div>
          <Switch>
            <Route exact path="/" component={Content} />
          </Switch>
        </div>

        <div id="about">        
          <Switch>
            <Route path="/About" component={About} />
          </Switch>
        </div>
        
        <div id="areamap">
          <Switch>
            <Route path="/Map" component={AreaMap} />
          </Switch>
        </div>

        <div id="places">
          <Switch>
            <Route path="/PlacesToVisit" component={PlacesToVisit} />
          </Switch>
        </div>

      </div>

      </Router>

    </div>
    </Suspense>
  );
}