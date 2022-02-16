import React,{useState} from "react";
import { Form, Button, Container, Row, Col,Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Login = () => {

 const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const OnUserValueChange=(e)=>{
        setUsername(e.target.value);
  }

  const OnPasswordValueChange=(e)=>{
    setPassword(e.target.value);
}

const FormSubmit=(e)=>{
    e.preventDefault();
  if(username.toUpperCase()==="prabhat.rawat90@gmail.com".toUpperCase())
 navigate("/home",true);
}
  
    return (
      <>
    <Container>
      <Row>
        <Col>
          <h1>Cafe Management System</h1>
        </Col>
        <Col>

        <Card>
  <Card.Header>Login</Card.Header>
  <Card.Body>
    <Card.Title>Enter username and password for login</Card.Title>
    <Card.Text>
    <Form onSubmit={FormSubmit}>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={username} onChange={OnUserValueChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={OnPasswordValueChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
    </Card.Text>
  </Card.Body>
</Card>
        
        </Col>
      </Row>
    </Container>
    </>

  );
};

export default Login;
