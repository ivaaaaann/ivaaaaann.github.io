import styled from "@emotion/styled";
import {ReactNode} from "react";
import globalStyles from "../../styles/GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";
import {SCREEN_WIDTH} from "../../constants/layout/const";

interface Props {
  children: ReactNode;
}

const Layout = ({children}: Props) => {
  return (
    <Container>
      <Header />
      <Wrap>{children}</Wrap>
      <Footer />
      {globalStyles}
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
  width: ${SCREEN_WIDTH}px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
`;

export default Layout;
