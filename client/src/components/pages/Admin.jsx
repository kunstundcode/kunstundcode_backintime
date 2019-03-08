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

class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectcode: "",
      code: "",
      thumbnail: "",
      secret: null,
      message: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.projectcode, this.state.code);
    let data = {
      projectcode: this.state.projectcode,
      code: this.state.code,
      thumbnail: this.state.thumbnail
    };
    api
      .postCodekuenste(data)
      .then(result => {
        console.log("SUCCESS!");
        this.setState({
          projectcode: "",
          code: "",
          thumbnail: "",
          message: `Your Codekunst '${this.state.projectcode}' has been created`
        });
        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 2000);
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  render() {
    return (
      <Container>
        <Form>
          <h2 className="adminh2">Admin</h2>
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
          <Button
            onClick={e => this.handleClick(e)}
            className={`loginBtn ${
              this.state.changeButton ? "btn-change" : "btn-secondary"
            }`}
          >
            Create Codekunst
          </Button>
          {this.state.message && (
            <div className="info info-danger">{this.state.message}</div>
          )}
        </Form>
      </Container>
      // <div className="Admin">
      //   <h2>Admin</h2>

      //   <div className="result">{this.state.secret}</div>

      //   <div>
      //     <h2>Add Codekunst</h2>
      //     <form>
      //       Projectcode:{" "}
      //       <input
      //         type="text"
      //         value={this.state.projectcode}
      //         name="projectcode"
      //         onChange={this.handleInputChange}
      //       />{" "}
      //       <br />
      //       Thumbnail:{" "}
      //       <input
      //         type="text"
      //         value={this.state.thumbnail}
      //         name="thumbnail"
      //         onChange={this.handleInputChange}
      //       />{" "}
      //       <br />
      //       Code:{" "}
      //       <textarea
      //         value={this.state.code}
      //         name="code"
      //         cols="100"
      //         rows="10"
      //         onChange={this.handleInputChange}
      //       />{" "}
      //       <br />
      //       <button onClick={e => this.handleClick(e)}>Create Codekunst</button>
      //     </form>
      //   </div>

      //   {this.state.message && (
      //     <div className="info info-danger">{this.state.message}</div>
      //   )}
      // </div>
    );
  }

  componentDidMount() {
    api
      .getSecret()
      .then(data => this.setState({ secret: data.secret }))
      .catch(err => this.setState({ message: err.toString() }));
  }
}

export default Secret;

/*
<Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
*/
