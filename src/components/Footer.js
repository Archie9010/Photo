import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.google.com/" target="_blank"><i class="fa-brands fa-google"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/" target="_blank"><i class="fa-brands fa-github"></i></Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4 text-white">© 2023 Copyrights: Artur Bozyk</p>
      </>
  );
}

export default Footer;