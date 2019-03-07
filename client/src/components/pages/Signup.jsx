import React, { Component } from "react";
import api from "../../api";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
  Card
} from "reactstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      message: null
    };
  }

  handleInputChange(stateFieldName, event) {
    this.setState({
      [stateFieldName]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    let data = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password
    };
    api
      .signup(data)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  render() {
    return (
      <Container className="signupLoginContainer">
        <Card className="cardlogin">
          <h2>Signup</h2>
          <Form className="login" onSubmit={e => this.handleClick(e)}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                value={this.state.username}
                onChange={e => this.handleInputChange("username", e)}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
              />
              <Label>Password</Label>
              <Input
                type="password"
                value={this.state.password}
                onChange={e => this.handleInputChange("password", e)}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
              />
              <Button
                className={`loginBtn ${
                  this.state.changeButton ? "btn-change" : "btn-secondary"
                }`}
              >
                Signup
              </Button>
              {this.state.message && (
                <div className="info info-danger">{this.state.message}</div>
              )}
            </FormGroup>
          </Form>
        </Card>
      </Container>
    );
  }
}

/*
  <Card className="cardlogin">
          <h2>Login and play around!</h2>
          <Form className="Login">
            <FormGroup>
              <Label for="username">Artist</Label>
              <Input
                type="text"
                value={this.state.username}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
                onChange={e => this.handleInputChange("username", e)}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                value={this.state.password}
                onFocus={() => {
                  this.setState({
                    changeButton: true
                  });
                }}
                onBlur={() => {
                  this.setState({
                    changeButton: false
                  });
                }}
                onChange={e => this.handleInputChange("password", e)}
              />

              <Button
                className={`loginBtn ${
                  this.state.changeButton ? "btn-change" : "btn-secondary"
                }`}
                onSubmit={e => this.handleClick(e)}
              >
                Login
              </Button>
            </FormGroup>
            {this.state.message && (
              <div className="info info-danger">{this.state.message}</div>
            )}
          </Form>
        </Card>
      </Container>
*/

export default Signup;
