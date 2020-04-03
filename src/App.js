import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import SettingUp from "./pages/SettingUp";
import MixedUnits from "./pages/MixedUnits";

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  height: 100vh;
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
          <li>Named Positions</li>
          <li>Aligning</li>
          <li>Justifying</li>
          <li>Placing</li>
          <li>Spacing</li>
          <li>Repeating</li>
          <li>Responsive Utilities</li>
          <li>Complex Grid</li>
        </ol>
        <Switch>
          <Route path="/setting-up">
            <SettingUp />
          </Route>
          <Route path="/mixed-units">
            <MixedUnits />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
