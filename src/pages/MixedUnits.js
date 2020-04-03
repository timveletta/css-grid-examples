import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const MixedUnits = () => {
  return (
    <LiveCodeEditor
      code={`
    const Container = styled.div\`
      display: grid;
      grid-template-columns: 300px 3fr 1fr 20%;
    \`;
    const Content = styled(Block)\`
      height: 300px;
    \`;

    render(
      <Container>
        <Block>Column 1</Block>
        <Block>Column 2</Block>
        <Block>Column 3</Block>
        <Block>Column 4</Block>
      </Container>
    )
  `}
    />
  );
};

export default MixedUnits;
