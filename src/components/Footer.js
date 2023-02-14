import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://twitter.com/"><i class="fa-brands fa-twitter"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://www.google.com/"><i class="fa-brands fa-google"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://www.linkedin.com"><i class="fa-brands fa-linkedin"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="https://github.com/"><i class="fa-brands fa-github"></i></Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4"> © 2023 Copyright: Artur Bozyk</p>
      </>
  );
}

export default AlignmentExample;