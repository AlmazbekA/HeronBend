import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import NewsDataService from "./services/news.services";
import { useNavigate } from "react-router";
import { useUserAuth } from "./UserAuthContext";
import imglight from "../streetlight.png";
import imgdark from "../streetdark.png";



const AddNews = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (title === "" || content === "" || link === "") {
      setMessage({ error: true, msg: "All fields are mandatory" });
    }
    const newNews = {
      title,
      content,
      link,
    };
    console.log(newNews);

    try {
      await NewsDataService.addNews(newNews);
      setMessage({ error: false, msg: "News Added" });
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setTitle("");
    setContent("");
    setLink("");
  };

  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
    <div class="row">
    <main class="form-signin w-100 m-auto dashboard-main col">
      <form onSubmit={handleSubmit}>
        <h1 class="h3 mb-3 fw-normal login-title"><a href="/">News Upload</a></h1>

        <div class="form-floating">
          <input type="text" class="form-control dashboard-title" id="floatingInput" placeholder="name@example.com"                 onChange={(e) => setTitle(e.target.value)} />
          <label for="floatingInput">Title</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control dashboard-text" id="floatingPassword" placeholder="Password" onChange={(e) => setContent(e.target.value)} />
          <label for="floatingPassword">Text</label>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control dashboard-link" id="floatingPassword" placeholder="Password"     onChange={(e) => setLink(e.target.value)} />
          <label for="floatingPassword">Link</label>
        </div>

        <button class="w-75 btn btn-lg btn-primary dashboard-button" type="submit" >Submit</button>
      </form>
    </main>
    <main class="form-signin w-100 m-auto dashboard-main col">
      <h1 class="imgh">Welcome to Heron Bend Admin Dashboard</h1>
      {/* <img class="imgdark" src={imgdark}/>
      <img class="imglight" src={imglight}/> */}
      </main>
    </div>

    <button class=" btn btn-lg btn-primary dashboard-button2" type="submit" onClick={handleLogout} >Sign out</button>
      {/* <div className="p-4 box">
      {message?.mg && (
        <Alert 
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {""}
          {message?.msg} 
        </Alert>
      )}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formNewsTitle">
            <InputGroup>
              <InputGroup.Text id="formNewsTitle">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsContent">
            <InputGroup>
              <InputGroup.Text id="formNewsContent">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formNewsLink">
            <InputGroup>
              <InputGroup.Text id="formNewsLink">A</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="News Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <div className="d-grid">
            <Button class="w-100" variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div> */}
    </>
  );
};

export default AddNews;
