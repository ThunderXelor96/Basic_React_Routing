
import React from 'react'
import '../styles.css'
import Skate from '../Assets/Skateboard.webp'
import Easy from '../Assets/Easypattin-removebg-preview.png'
import Bike from '../Assets/Easybike.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Plage from '../Assets/plage-noir.jpg'
import Sable from '../Assets/sable-noir.jpg'
import Fakher from '../Assets/fakher-noir.jpg'
import { Container, Row } from 'react-bootstrap';


export default function Home() {

    return (
        <>
      
      
        <section>
          <div className='text'>
            <br/>
            <h1 className='know'>Know Never</h1>
            <br/>
            <h2>Presentation</h2>
            <br/>
            <br/>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt id cupiditate nisi, delectus porro iure esse ut et architecto atque, autem sed dolor vitae nihil ex dolorem labore aliquid.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis facere recusandae, tenetur mollitia error molestiae eaque sapiente, blanditiis maxime nihil in, exercitationem quas excepturi voluptate dolorum eius omnis? Facilis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore natus delectus illo recusandae ex. A dolorem tempora aliquam molestias suscipit eveniet corporis fugiat cum eos doloremque facere qui, ipsum voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quam sunt quod aut beatae magni iusto dolorem iste aliquid iure hic est explicabo, facere molestias molestiae unde eligendi similique architecto?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aut reiciendis assumenda unde nemo nobis sunt fuga tempore asperiores non eaque, reprehenderit saepe facilis harum recusandae cumque molestias adipisci quis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt commodi aliquid rem fugit minima eius labore obcaecati iste aut ab omnis consectetur ipsa facilis autem laboriosam laborum facere, cupiditate dolor!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quidem tenetur ullam dolorem asperiores natus placeat, necessitatibus tempora quasi excepturi! Architecto odit repudiandae commodi hic perferendis repellendus quam voluptas qui.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam at dolorum ad, maiores, rem sequi error eligendi eos nulla, in magnam voluptates nobis ex excepturi? Nam at maiores dolor.

            </p>
          </div>
         
          </section>
          <br/>

          <h1 className='know'>Découvrir Never</h1>

          <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Plage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Sable}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Fakher}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <br/>
    <section>
      <h3 className='know'>Lorem ipsum </h3>
      <p className='testtext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nesciunt id cupiditate nisi,<br/> delectus porro iure esse ut et architecto atque,<br/> autem sed dolor vitae nihil ex dolorem labore aliquid.
      <br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nobis facere recusandae, <br/>tenetur mollitia error molestiae eaque sapiente, blanditiis maxime nihil in, exercitationem quas excepturi voluptate dolorum eius omnis?<br/> Facilis.
              Lorem ipsum dolor sit </p>
    </section>

    <Container className="mt-5"  >
      <Row className="row-cols-1 row-cols-md-2 g-4" >
    <Card className="card"  style={{ width: '18rem' , margin:'15px 0 0 65px', backgroundColor: '#1c295a', color:'#fff', cursor:'pointer' }} >
      <Card.Img variant="top" src={Skate} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="card" style={{ width: '18rem' , margin:'15px 0 0 65px' , backgroundColor: '#1c295a', color:'#fff' , cursor:'pointer'}} >
      <Card.Img variant="top" src={Easy} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className="card" style={{ width: '18rem' , margin:'15px 0 0 65px', backgroundColor: '#1c295a', color:'#fff' , cursor:'pointer'}} >
      <Card.Img variant="top" src={Bike} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="light">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    </Container>

        </>
        
    )
}
