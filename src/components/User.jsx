import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";
import logo from "../heronbendlo.png";
 

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <main class="form-signin w-100 m-auto login-main">
      <form onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal login-title"><a href="/">Heron Bend HOA Login</a></h1>

        <div class="form-floating">
          <input type="email" class="form-control login-email" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control login-password" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <label for="floatingPassword">Password</label>
        </div>

        <button class="w-75 btn btn-lg btn-primary login-button" type="submit" >Sign in</button>
      </form>
    </main>
      {/* <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
        </div>
      </div> */}
    </>
  );
};

export default Login;