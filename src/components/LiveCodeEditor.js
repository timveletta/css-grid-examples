import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

const Container = styled.div`
  display: grid;
  grid-template-columns: minmax(600px, 1fr) 2fr;
  grid-template-rows: 4fr 1fr;
  grid-gap: 1rem;
`;

const Editor = styled(LiveEditor)`
  background-color: #1d1d1d;
  grid-row: span 2;
`;

const Block = styled.div`
  text-align: center;
  background-color: #ddd;
  margin: 1rem;
  padding: 1rem;
  border-radius: 4px;
  display: grid;
  align-items: center;
`;

const scope = {
  styled,
  Block,
  makeStyles,
  Grid,
  Paper,
  Typography,
  ButtonBase,
};

const LiveCodeEditor = ({ code }) => {
  return (
    <LiveProvider scope={scope} noInline={false} code={code}>
      <Container>
        <Editor />
        <LivePreview />
        <LiveError />
      </Container>
    </LiveProvider>
  );
};

export default LiveCodeEditor;
