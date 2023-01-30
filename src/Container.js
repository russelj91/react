import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Con() {
  return (
    <Container fluid>
      <Row className='text-center'>

        <Col className='shadow rounded my-5 py-5'>
        <h3>React</h3>
        </Col>

        <Col className='shadow rounded my-5 py-5'>
        <h3>Js</h3>
        </Col>

        <Col className='shadow rounded my-5 py-5'>
        <h3>Activity</h3>
        </Col>


      </Row>
    </Container>
  );
}

export default Con;