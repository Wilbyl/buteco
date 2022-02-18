import styled from "styled-components";

const Footer = styled.div` 

background-color: #B22222;
color: #fff;
padding: 1rem 0;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
width: 100vw;
`;

export const FooterS = () => {
  
  return(
  <Footer>
    <a href="!#">
      Para informações sobre o site entre em contato com o email:
      prost2@live.com
    </a>
  </Footer>
  );
};
