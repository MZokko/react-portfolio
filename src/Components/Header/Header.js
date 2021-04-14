import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import TelegramIcon from '@material-ui/icons/Telegram';
import resumeData from '../../utils/resumeData';
import MyBtn from '../Button/MyButton';
import './Header.css';

function Header(props) {
  const pathName = window.location.pathname;
  return (
    <Navbar expand='lg' sticky='top' className='navbarContainer'>
      {/* home  */}
      <NavLink as={NavLink} to='/'>
        <Navbar.Brand className='navHome'>
          <HomeIcon />
        </Navbar.Brand>
      </NavLink>

      <Navbar.Toggle />

      <Navbar.Collapse>
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
        </Nav>

        <div className='headerRightDiv'>
          {Object.keys(resumeData.social).map((key) => {
            return (
              <a key={key} href={resumeData.social[key].link} target='_blank'>
                {resumeData.social[key].icon}
              </a>
            );
          })}

          <MyBtn icon={<TelegramIcon />} text={'Hire Me'} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
