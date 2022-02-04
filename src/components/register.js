import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";
function Login() {


  return (
    <>



      <h2>login</h2>


      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"

          placeholder="Enter email"

        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"

          placeholder="Enter name"

        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>password</Form.Label>
        <Form.Control
          type=""

          placeholder="Enter password"

        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>mob no</Form.Label>
        <Form.Control
          type="email"

          placeholder="Enter Mob no"

        />
      </Form.Group>



      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Link to="/">
        <button>
          go to Login
        </button>
      </Link>

    </>
  );
}

export default Login;
