import styled from "styled-components";

const Footer = styled.div` 

background-color: #dc3545;
color: #212529;
padding: 0,9 rem 0;
display: flex;
align-items: center;
justify-content: center;
position: fixed;
bottom: 0;
width: 100vw;

a {
  color: #ffff;
}
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
