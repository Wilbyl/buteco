import { useState, useEffect } from 'react';
import axios from 'axios';
import { info } from '../../contants/slider';
import { Slider } from '../../components/slider';
import { Container } from 'react-bootstrap';
import { CardS } from '../../components/Card';
import { CardContainer } from '../../components/Card-conteiner';

export const Main = ()=>{
    const [pratos , setPratos] = useState([]);

    const getData = async () => {
        await axios.get('/pratos').then((response) => {
            setPratos(response.data);
        });
};
  useEffect(() => {
    getData();
  }, []);

return (
<>
      <Slider data={info}/>
      <Container>
        <CardContainer>
          {pratos.map((item) => (
            <a href="!#" key={item.id}>
              <CardS>
                <CardS.Img variant="top" src={item.imageUrl} />
              </CardS>
            </a>
          ))}
        </CardContainer>
      </Container>
    </>

)


};