import React from "react";
import LiveCodeEditor from "../components/LiveCodeEditor";

const NamedAreas = () => {
  return (
    <LiveCodeEditor
      code={`
    const Container = styled.div\`
      display: grid;
      grid-template-columns: 1fr 5fr 1fr;
      grid-template-rows: 1fr auto 1fr;
      grid-template-areas:
        "header header header"
        "nav content ad"
        "footer footer footer";
    \`;

    const Header = styled(Block)\`
      grid-area: header;
    \`;

    const Nav = styled(Block)\`
      grid-area: nav;
    \`;

    const Content = styled(Block)\`
      height: 300px;
      grid-area: content;
    \`;

    const Ad = styled(Block)\`
      grid-area: ad;
    \`;

    const Footer = styled(Block)\`
      grid-area: footer;
    \`;

    render(
      <Container>
        <Header>Header</Header>
        <Nav>Nav</Nav>
        <Content>Content</Content>
        <Ad>Ad</Ad>
        <Footer>Footer</Footer>  
      </Container>
    )
  `}
    />
  );
};

export default NamedAreas;
