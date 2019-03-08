import api from "../../api";
import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import CardProject from "../CardProject";
import SidebarContainer from "../SidebarContainer";

class Codekunst extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codekuenste: []
    };
  }

  deleteCodekunst(codekunstId) {
    api.deleteCodekunst(codekunstId).then(data => {
      this.setState({
        codekuenste: this.state.codekuenste.filter(c => c._id !== codekunstId),
        message: data.message
      });
      // Remove the message after 3 seconds
      setTimeout(() => {
        this.setState({
          message: null
        });
      }, 3000);
    });
  }

  render() {
    return (
      // <div className="wrapper">
      //   <SidebarContainer />
      //   <Container className="container">
      //     <ProjectGrid />
      //   </Container>
      // </div>
      <div className="wrapper">
        <SidebarContainer />
        <Container className="container">
          <Container className="container homeheader">
            <h2 className="homeh2">kunstundcode</h2>
            <p className="p1">Generative Design / Experimental Design</p>
            <p className="p2">Create your own piece of art with code.</p>
          </Container>
          <Row className="row">
            {this.state.codekuenste.map(c => (
              <CardProject key={c._id} c={c} />

              /*-----Andre delete button-----
              <div key={c._id}>
                <CardProject c={c} />
                {api.isAdmin() && (
                  <button onClick={() => this.deleteCodekunst(c._id)}>
                    Delete
                  </button>
                )}
              </div>
              */
            ))}

            {this.state.message && (
              <div className="info">{this.state.message}</div>
            )}
          </Row>
        </Container>
      </div>
    );
  }
  componentDidMount() {
    api
      .getCodekuenste()
      .then(codekuenste => {
        this.setState({
          codekuenste: codekuenste
        });
      })
      .catch(err => console.log(err));
  }
}

export default Codekunst;
