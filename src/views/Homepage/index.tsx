import { useState } from "react";
import { useForm } from 'react-hook-form'
import { useFetchCity } from "../../hook/useFetchCity";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface FormData {
    city: string;
}

const Homepage = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [weather, setWeather] = useState({
        city: "",
        country: "",
        temperature: 0,
        conditionText: "",
        icon: "",
    });

    const onSubmit =  async (params: any) => {
        const data = await useFetchCity(params.city);
        setWeather({
            city: data?.location?.name,
            country: data?.location?.country,
            temperature: data?.current?.temp_c,
            conditionText: data?.current?.condition?.text,
            icon: data?.current?.condition?.icon,
        });
        reset();
    };
    
    return (
        <Container style={{padding: 20}}>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2 className="text-center">
                        ¡Planifica tu día con CityWeather!
                    </h2>

                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" {...register('city', { required: true })} placeholder="Ingrese la ciudad" />
                            <Button variant="outline-secondary" type="submit">Consultar</Button>
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
