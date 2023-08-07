import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";
import {SCREEN_WIDTH} from "../../constants/layout/const";

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Wrap>
        <h1>{data.site.siteMetadata.title}</h1>
      </Wrap>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 0px;
`;

const Wrap = styled.nav`
  width: ${SCREEN_WIDTH}px;
  display: flex;
  align-items: center;
`;

export default Header;
