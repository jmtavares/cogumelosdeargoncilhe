import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/react";
import { GlobalContainer } from "../../styles/typography";
import Footer from "./footer";

const Layout = ({ children, footer = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Global
          styles={css`
            body {
              margin: 0;
              padding: 0;
            }

            li {
              list-style: none;
            }

            :root {
              --color1: #616161;
              --color2: #000000;
              --color3: #ffffff;
            }

            html.theme1 {
              :root {
                  --color1: #536147;
                  --color2: #000000;
                  --color3: #ffffff;
                }
              }
            }
          `}
        />
        <GlobalContainer>
          <main>{children}</main>
          {footer && <Footer />}
        </GlobalContainer>
      </>
    )}
  />
);

export default Layout;
