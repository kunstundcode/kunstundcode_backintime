import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../api";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogoutClick(e) {
    api.logout();
  }

  render() {
    let username, userId;
    if (localStorage.getItem("user")) {
      username = JSON.parse(localStorage.getItem("user")).username;
      userId = JSON.parse(localStorage.getItem("user"))._id;
    }

    return (
      <div>
        <Navbar expand="md">
          {/* Brand ist ein a mit dem text un ein button */}
          <NavbarBrand tag={Link} className="brand" to="/">
            ⫷ K⩂ℿ⫓†_Úπ∂_℃◒∂⅀ ⫸
          </NavbarBrand>
          {/* NavbarToggler ist der Button der den Inhalt der Navbar aufnimmt wenn die größe zu klein wird */}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {/* nav ist ul und item li */}
            <Nav navbar>
              {/* <NavItem>
                <NavLink href="/codek unst">Components</NavLink>
              </NavItem> */}

              {/* ERSTENS HOME alias CodeKunst /codekunst */}
              <UncontrolledDropdown nav inNavbar>
                {/* nav - for dropdownussage inside the nav */}
                <DropdownToggle nav>Home Sweet..</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to="/codekunst">
                    Home
                  </DropdownItem>
                  <DropdownItem>Endlich</DropdownItem>
                  <DropdownItem>Zuhause</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* ZWEITES MY-ART alias Profil - /user/" + userId*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>My...</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem tag={Link} to={"/user/" + userId}>
                    _Experiments_
                  </DropdownItem>
                  <DropdownItem>{username}..</DropdownItem>

                  <DropdownItem>visit your</DropdownItem>
                  <DropdownItem>Artperiments..</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* DRITTES In-N-Out- alias Signup und Login-  /signup  /login  /*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>In_N_Out</DropdownToggle>
                <DropdownMenu>
                  {!api.isLoggedIn() && (
                    <DropdownItem tag={Link} to="/signup">
                      Signup here
                    </DropdownItem>
                  )}
                  {!api.isLoggedIn() && (
                    <DropdownItem tag={Link} to="/login">
                      Login there
                    </DropdownItem>
                  )}
                  {api.isLoggedIn() && (
                    <DropdownItem
                      onClick={e => this.handleLogoutClick(e)}
                      tag={Link}
                      to="/"
                    >
                      Logout
                    </DropdownItem>
                  )}
                  <DropdownItem>What are you</DropdownItem>
                  <DropdownItem>Waiting for ?..</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              {/* Wenn USER angemeldet erscheint Name und wenn ADMIN erscheint Admin */}
              {username && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>{username}..</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>How is it going?</DropdownItem>
                    <DropdownItem>Have Fun</DropdownItem>
                    <DropdownItem>experimenting..</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}

              {api.isAdmin() && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav>Admin</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem tag={Link} to="/admin">
                      Moin, {username}
                    </DropdownItem>
                    <DropdownItem>Bereit zu sehen wie</DropdownItem>
                    <DropdownItem>schrecklich P5 und</DropdownItem>
                    <DropdownItem>react zusammenarbeiten ?</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

//  <NavLink to="/" exact>
//               Home
//             </NavLink>
//             <NavLink to="/codekunst">Codekunst</NavLink>

{
  /* The NavLink "Add country" is displayed only when the user is connected */
}
{
  /* {api.isLoggedIn() && <NavLink to="/add-country">Add country</NavLink>} */
}

// { !api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink> }
// { !api.isLoggedIn() && <NavLink to="/login">Login</NavLink> }
// {
//   api.isLoggedIn() && (
//     <Link to="/" onClick={e => this.handleLogoutClick(e)}>
//       Logout
//               </Link>
//   )
// }
// { api.isAdmin() && <NavLink to="/admin">Admin</NavLink> }

/*=======================ANDRE========================
import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import api from '../api';
import { Link, NavLink } from 'react-router-dom';


class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

handleLogoutClick(e) {
  api.logout()
}

render() {
  let username, userId;
  if (localStorage.getItem('user')) {
    username = JSON.parse(localStorage.getItem('user')).username;
    userId = JSON.parse(localStorage.getItem('user'))._id;
  }

  return (
    <MDBNavbar color="lime accent-2" light expand="md">
      <MDBNavbarBrand>
        <strong className="black-text">kunstundcode</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={this.toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav left>
          <MDBNavItem>
            <MDBNavLink to="/codekunst">Codekunst</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to={"/user/"+userId}>MyArt</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>



        <MDBNavbarNav right>
        {username && <MDBNavItem><MDBNavLink to={"/user/"+userId}>{username}</MDBNavLink></MDBNavItem>}
        {api.isAdmin() && <MDBNavItem><MDBNavLink to="/admin">Admin</MDBNavLink></MDBNavItem>}
          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <MDBIcon icon="user" />
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default" right>
              {!api.isLoggedIn() && <MDBDropdownItem><NavLink to="/signup">Signup</NavLink></MDBDropdownItem>}
              {!api.isLoggedIn() && <MDBDropdownItem><NavLink to="/login">Login</NavLink></MDBDropdownItem>  }
              {api.isLoggedIn() && <MDBDropdownItem><Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link></MDBDropdownItem>}
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
    );
  }
}

export default NavbarPage;

 */
