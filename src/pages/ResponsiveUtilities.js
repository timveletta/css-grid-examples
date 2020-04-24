import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const ResponsiveUtilities = () => {
  return (
    <LiveCodeEditor
      code={`() => {
    const Container = styled.div\`
      display: grid;
       grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    \`;
    const Content = styled(Block)\`
      height: 300px;
    \`;

    return (
      <Container>
        <Block>Block 1</Block>
        <Block>Block 2</Block>
        <Block>Block 3</Block>
        <Block>Block 4</Block>
        <Block>Block 5</Block>
        <Block>Block 6</Block>
        <Block>Block 7</Block>
        <Block>Block 8</Block>
      </Container>
    )
    }`}
    />
  );
};

export default ResponsiveUtilities;
