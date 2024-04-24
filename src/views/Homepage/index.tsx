import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Homepage = () => {

    const  API_WEATHER =  "https://api.weatherapi.com/v1/current.json?key=c21db2bcc653436281242558242204&q="
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temperature: 0,
        condition: "",
        conditionText: "",
        icon: "",
      });
    
    const handleChange = (event: any) => {
        setCity(event.target.value)
    };
    
    const handleSubmit = async(event: any) => {
        event.preventDefault();
        try {
            const res = await fetch(API_WEATHER + city);
            const data = await res.json();

            setWeather({
                city: data.location.name,
                country: data.location.country,
                temperature: data.current.temp_c,
                condition: data.current.condition.code,
                conditionText: data.current.condition.text,
                icon: data.current.condition.icon,
            });

        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <Container style={{padding: 20}}>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">
                        Plan your day with CityWeather!
                    </h2>

                    <Form onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" onChange={handleChange} placeholder="Enter city" aria-label="City" aria-describedby="basic-addon2" />
                            <Button data-bs-theme="dark" variant="outline-secondary" type="submit">Submit</Button>
                        </InputGroup>
                    </Form>

                    {weather.city && (
                        <div>
                            <Card className="text-center">
                                <Card.Header>{weather.city}, {weather.country}</Card.Header>
                                    <Card.Body>
                                        <img alt={weather.conditionText} src={weather.icon} />
                                        <Card.Text>
                                            {weather.temperature} °C
                                        </Card.Text>
                                    </Card.Body>
                                <Card.Footer className="text-muted">{weather.conditionText}</Card.Footer>
                            </Card>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
};

export default Homepage;
