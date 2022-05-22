import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout.js";

export default function AboutPage() {
  //having named functions help debugging - Gatsby requires default or will not be recognized
  return (
    <>
      <Layout
        title="About This Site"
        description="More information on how this site was created with love and care"
      >
        <h1>About This Site</h1>
        <Link to="/">Back to home</Link>
      </Layout>
    </>
  );
}
