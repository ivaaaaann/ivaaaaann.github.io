import * as React from "react";
import {Link} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

import Seo from "../components/Seo";
import Layout from "../components/Layout";

const IndexPage = () => <Layout>asdad</Layout>;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="Home" description={""} children={undefined} />
);

export default IndexPage;
