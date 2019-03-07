import React, { Component } from "react";
import api from "../../api";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    api
      .login(this.state.username, this.state.password)
      .then(result => {
        console.log("SUCCESS!");
        this.props.history.push("/"); // Redirect to the home page
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  render() {
    return (
      <Container>
        <h2>Login and play around!</h2>
        <Form className="Login">
          <FormGroup>
            <Label for="username">Artist</Label>
            <Input
              type="text"
              value={this.state.username}
              onChange={e => this.handleInputChange("username", e)}
            />
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                value={this.state.password}
                onChange={e => this.handleInputChange("password", e)}
              />
            </FormGroup>

            <Button onSubmit={e => this.handleClick(e)}>Login</Button>
          </FormGroup>
          {this.state.message && (
            <div className="info info-danger">{this.state.message}</div>
          )}
        </Form>
      </Container>
    );
  }
}

/*
<Container>
        <Form>
          <h2>Admin</h2>
          <div className="result">{this.state.secret}</div>
          <FormGroup>
            <Label for="projectcode">Projectcode: </Label>
            <Input
              type="text"
              value={this.state.projectcode}
              name="projectcode"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="thumbnail">Thumbnail: </Label>
            <Input
              type="text"
              value={this.state.thumbnail}
              name="thumbnail"
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="codeInput">Code: </Label>
            <Input
              type="textarea"
              value={this.state.code}
              name="code"
              cols="100"
              rows="10"
              onChange={this.handleInputChange}
            />
            <FormText color="muted">
              Lets try out a 100000 times if this shitty P5code is working in a
              react environment
            </FormText>
          </FormGroup>
          <Button onClick={e => this.handleClick(e)}>Create Codekunst</Button>
        </Form>
      </Container>
*/

export default Login;
