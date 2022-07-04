import styled from "styled-components";

import { Carousel } from "react-bootstrap";

const Image = styled.img`
  height: 30rem;
  width: 100%;

  @media (max-width: 1200px) {
    height: 30rem;
  }
  @media (max-width: 1024px) {
    height: 25rem;
  }
  @media (max-width: 600px) {
    height: 20rem;
  }
  @media (max-width: 440px) {
    height: 16rem;
  }
  @media (max-width: 320px) {
    height: 12rem;
  }
`;

export const Slider = (props) => {
  return (
    <Carousel>
      {props.data.map((item) => (
        <Carousel.Item key={item.alt}>
          <Image src={item.img} alt={item.alt} />
          <caption>
            <h3>{item.title}</h3>
            <p>{item.subtitle}</p>
          </caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
