import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import PrimaryButton from '../shared/PrimaryButton';

const Menubar = () => {
  return (
    <header className='menubar'>
        <Navbar expand="lg">
            <div className='container'>
                <Link to="/" className='navbar-brand'>
                    <img src={logo} alt="" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown className='nav-link' title="Products" id="basic-nav-dropdown">
                            <Link to="/">Product 1</Link>
                            <Link to="/">Product 2</Link>
                        </NavDropdown>
                        <Link to="/" className='nav-link'>About us</Link>
                        <Link to="/" className='nav-link'>Contact us</Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <PrimaryButton padding="14px 33px" className="bg-primary text-white get-started">
                            Get Started
                        </PrimaryButton>
                        <PrimaryButton padding="14px 33px" className="bg-white text-primary border-text login">
                            Login
                        </PrimaryButton>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    </header>
  )
}

export default Menubar