import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const MixedUnits = () => {
  return (
    <LiveCodeEditor
      code={`
    const Container = styled.div\`
      display: grid;
      grid-template-columns: 300px 5fr 20%;
      grid-template-rows: 1fr auto 1fr;
    \`;
    const Content = styled(Block)\`
      height: 300px;
    \`;

    render(
      <Container>
        <Block>Header 1</Block>
        <Block>Header 2</Block>
        <Block>Header 3</Block>
        <Block>Sidebar</Block>
        <Content>Content</Content>
        <Block>Ad</Block>
        <Block>Footer 1</Block> 
        <Block>Footer 2</Block> 
        <Block>Footer 3</Block> 
      </Container>
    )
  `}
    />
  );
};

export default MixedUnits;
