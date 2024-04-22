import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

            console.log(data);

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
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter city" required/>    
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            {weather.city && (
                <div>
                    <h2>
                        {weather.city}, {weather.country}
                    </h2>
                    <img alt={weather.conditionText} src={weather.icon} />
                    <h3>
                        {weather.temperature} °C
                    </h3>
                    <h5>
                        {weather.conditionText} °C
                    </h5>
                </div>
            )}
        </div>
    )
};

export default Homepage;
