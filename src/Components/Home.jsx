import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className="home">
            <Carousel style={{ height: "calc(60vh + 10vw)" }}>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../images/ski.jpeg"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carouselTitle">SKIING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../images/hike.jpeg"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carouselTitle">HIKING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img
                        className="d-block w-100"
                        src="../images/bike.jpeg"
                        alt=""
                    />
                    <Carousel.Caption style={{ bottom: "18%", letterSpacing: "10pt" }}>
                        <div className="animated fadeInDown">
                            <h1 className="carouselTitle">BIKING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row>
                    <Col className="welcomeMessage">
                        <h2>Welcome to MountainStop!</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                        in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href="/activites" className= "welcomeButton" variant="outline-dark">Check Out the Activites!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;