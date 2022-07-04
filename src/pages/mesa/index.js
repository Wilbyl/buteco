//import styled from "styled-components";
import {Card,Button,Row,Col} from "react-bootstrap"


export const Mesa = () => {
    return(
<Row xs={4} md={6} className="g-4">
  {Array.from({ length: 24 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20201129/ourmid/pngtree-table-png-image_2440134.jpg"/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
          <Button variant="primary" checked="che">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    )
}