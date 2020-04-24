import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import SettingUp from "./pages/SettingUp";
import MixedUnits from "./pages/MixedUnits";
import PositioningElements from "./pages/PositioningElements";
import NamedAreas from "./pages/NamedAreas";
import Aligning from "./pages/Aligning";
import Justifying from "./pages/Justifying";
import Placing from "./pages/Placing";
import ComplexGrid from "./pages/ComplexGrid";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;

  li {
    margin-bottom: 0.5rem;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <ol>
          <li>
            <Link to="/setting-up">Setting Up</Link>
          </li>
          <li>
            <Link to="/mixed-units">Mixed Units</Link>
          </li>
          <li>
            <Link to="/positioning-elements">Positioning Elements</Link>
          </li>
          <li>
            <Link to="/named-areas">Named Areas</Link>
          </li>
          <li>
            <Link to="/aligning">Aligning</Link>
          </li>
          <li>
            <Link to="/justifying">Justifying</Link>
          </li>
          <li>
            <Link to="/placing">Placing</Link>
          </li>
          {/* <li>Spacing</li>
          <li>Repeating</li> */}
          <li>Responsive Utilities</li>
          <li>
            <Link to="/complex-grid">Complex Grid</Link>
          </li>
        </ol>
        <Switch>
          <Route path="/setting-up">
            <SettingUp />
          </Route>
          <Route path="/mixed-units">
            <MixedUnits />
          </Route>
          <Route path="/positioning-elements">
            <PositioningElements />
          </Route>
          <Route path="/named-areas">
            <NamedAreas />
          </Route>
          <Route path="/aligning">
            <Aligning />
          </Route>
          <Route path="/justifying">
            <Justifying />
          </Route>
          <Route path="/placing">
            <Placing />
          </Route>
          <Route path="/complex-grid">
            <ComplexGrid />
          </Route>
          <Route path="/" exact>
            <Redirect to="/setting-up" />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
