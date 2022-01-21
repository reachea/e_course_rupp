import styled from "styled-components";

export const FooterContainer = styled.div`
  padding: 0px 0px 20px 0px;
  border-top: 1px solid #C4C7CE;

  .footer-nav {
    text-decoration: none;
    padding: 0px;

    li {
      list-style: none;
      a {
        text-decoration: none;
        color: #212529;

        &:hover {
          color: #5A47AB;
        }
      }
    }
  }
`;