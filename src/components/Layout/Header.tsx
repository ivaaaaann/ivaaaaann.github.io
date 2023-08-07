import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";

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
      <h1>{data.site.siteMetadata.title}</h1>
    </Container>
  );
};

const Container = styled.header`
  width: 100%;
`;

export default Header;
