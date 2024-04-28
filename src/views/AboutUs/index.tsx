import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const About = () => {
    return (
        <Container style={{padding: 20}}>
            <Row>
                <Col md={{ span: 10, offset: 1 }} >
                    <h1 className='text-center'>CityWeather</h1>
                    <h4>
                        CityWeather es mi primer proyecto utilizando React, es un sitio web para consultar 
                        el clima de cualquier ciudad ingresando el nombre de la misma.
                    </h4><br></br>

                    <h4>
                        La consulta nos permite visualizar el país al que corresponde la ciudad, un gráfico 
                        del estado del tiempo, la temperatura en grados centígrados y una descripción del 
                        estado del tiempo.
                    </h4>
                </Col>

                <Col md={{ span: 10, offset: 1 }} style={{padding: 20}}>
                    <h1 className='text-center'>Características técnicas</h1>
                    <Row>
                        <Col md={4}>
                            <Card bg={'dark'} style={{ width: '18rem' }} text={'white'} className="mb-2">
                                <Card.Body>
                                    <Card.Title>Hooks Reusables</Card.Title>
                                    <Card.Text>
                                        Para obtener la información del clima se utiliza Weather API, se creo
                                        un Hook reusable para realizar la consulta al API.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card bg={'dark'} style={{ width: '18rem' }} text={'white'} className="mb-2">
                                <Card.Body>
                                    <Card.Title>React hook form</Card.Title>
                                    <Card.Text>
                                        Para consutlar se implementa un formulario para ingresar el nombre de la ciudad que
                                        se desea consultar el clima.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card bg={'dark'} style={{ width: '18rem' }} text={'white'} className="mb-2">
                                <Card.Body>
                                    <Card.Title>Routing</Card.Title>
                                    <Card.Text>
                                        Se utiliza React router para implementar tres rutas Home, Historial de
                                        busqueda y Acerca de CityWeather.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card bg={'dark'} style={{ width: '18rem' }} text={'white'} className="mb-2">
                                <Card.Body>
                                    <Card.Title>Deploy a producción</Card.Title>
                                    <Card.Text>
                                        Para realizar el despliegue del proyecto web a producción se utlizó Netlify
                                        y GitHub para alojamiento del código.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
