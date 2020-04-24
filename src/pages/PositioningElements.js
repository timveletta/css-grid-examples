import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const PositioningElements = () => {
  return (
    <LiveCodeEditor
      code={`() => {
    const Container = styled.div\`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr;
    \`;

    const ColumnPositioning = styled(Block)\`
      grid-column: 2 / 5;
    \`;
    
    const RowPositioning = styled(Block)\`
      grid-row: 1 / 4;
    \`;

    const ColumnSpanning = styled(Block)\`
      grid-column: 1 / span 2;
    \`;
    
    const RowSpanning = styled(Block)\`
      grid-row: 2 / span 2;
    \`;

    const AreaPositioning = styled(Block)\`
      grid-area: 2 / 3 / 2 / 5;
    \`;

    const AreaSpanning = styled(Block)\`
      grid-area: 3 / 3 / span 2 / span 2;
    \`;

    return (
      <Container>
        <ColumnPositioning>Column Positioning</ColumnPositioning>
        <RowPositioning>Row Positioning</RowPositioning>
        <ColumnSpanning>Column Spanning</ColumnSpanning>
        <RowSpanning>Row Spanning</RowSpanning>
        <AreaPositioning>Area Positioning</AreaPositioning>
        <AreaSpanning>Area Spanning</AreaSpanning>
      </Container>
    )
    }`}
    />
  );
};

export default PositioningElements;
