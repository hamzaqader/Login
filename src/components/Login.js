import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import { login } from "../Redux/actions/user_action";
import { Form, Button } from "react-bootstrap";
function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
  
    const userLogin = useSelector((state) => state.userLogin);

    const history= useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password,history))
  };
  return (
    <>
       {/*<Todo />*/}


        <h2>login</h2>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        
    </>
  );
}

export default Login;
