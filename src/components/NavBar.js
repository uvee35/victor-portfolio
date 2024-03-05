import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
          <Navbar.Brand href="#home" className="uvee-dev-brand">
  <span style={{ color: 'white' ,fontSize: '2rem' }}>Uvee</span><span style={{ color: 'yellow', fontSize: '2rem' }}>Dev</span>
</Navbar.Brand>

         
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
      <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-instagram" style={{ fontSize: '25px', color: '#E1306C' }}></ion-icon>
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-github" style={{ fontSize: '25px', color: '#ffff' }}></ion-icon>
      </a>
      <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <ion-icon name="logo-linkedin" style={{ fontSize: '25px', color: '#0A66C2' }}></ion-icon>
      </a>
    </div>
                <button className="vvd"><span>Let’s Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
  )
}