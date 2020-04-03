import React from "react";
import styled from "styled-components";
import { LiveProvider, LiveEditor, LivePreview } from "react-live";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
`;

const Editor = styled(LiveEditor)`
  background-color: #1d1d1d;
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

const scope = { styled, Block };

const LiveCodeEditor = ({ code }) => {
  return (
    <LiveProvider scope={scope} noInline={true} code={code}>
      <Container>
        <Editor />
        <LivePreview />
      </Container>
    </LiveProvider>
  );
};

export default LiveCodeEditor;
