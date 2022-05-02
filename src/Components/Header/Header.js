import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import { data } from '../../utils/resumeData';
import MyBtn from '../Button/MyButton';
import './Header.css';

function Header(props) {
  const pathName = window.location.pathname;
  return (
    <Navbar
      collapseOnSelect
      expand='false'
      sticky='top'
      className='navbarContainer'
    >
      {/* home  */}
      <NavLink as={NavLink} to='/'>
        <Navbar.Brand className='navHome'>
          <HomeIcon />
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle />

      <Navbar.Collapse collapseOnSelect className='navbarCollapse'>
        <Container>
          {/* resume nav */}
          <Nav className='headerLeft'>
            <Nav.Link
              as={NavLink}
              to='/resume'
              className={
                pathName === '/resume' ? 'headerActiveLink' : 'headerLink'
              }
            >
              Resume
            </Nav.Link>
            {/* portefolio nav */}
            <Nav.Link
              as={NavLink}
              to='/portefolio'
              className={
                pathName === '/portefolio' ? 'headerActiveLink' : 'headerLink'
              }
            >
              Portefolio
            </Nav.Link>

            {/* drop down to API play ground nav */}
            <NavDropdown title='Api'>
              <NavDropdown.Item>
                <Nav.Link as={NavLink} to='/AdviceApi'>
                  Advice
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <div className='headerRightDiv'>
            {Object.keys(data.social).map((key) => {
              return (
                <a
                  key={key}
                  href={data.social[key].link}
                  rel='noreferrer'
                  target='_blank'
                >
                  {data.social[key].icon}
                </a>
              );
            })}

            <MyBtn icon={<TelegramIcon />} text={'Hire Me'} />
          </div>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
