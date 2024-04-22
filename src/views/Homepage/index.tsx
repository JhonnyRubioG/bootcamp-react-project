import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Homepage = () => {

    const [formCity, setFormCity] = useState("")
    
      const handleChange = (event: any) => {
        setFormCity(event.target.value)
      };
    
      const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formCity);
      };
    
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} type="text" placeholder="Enter city" />    
                </Form.Group>

                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
};

export default Homepage;
