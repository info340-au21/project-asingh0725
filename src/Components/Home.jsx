import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Home() {
    return (
        <div className="home">
            <Carousel style={{ height: "calc(70vh + 10vw)" }}>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src="../images/ski.jpeg"
                        alt="skiing"
                    />
                    <Carousel.Caption style={{ bottom: "22%", letterSpacing: "10pt" }}>
                        <div>
                            <h1 className="carouselTitle">SKIING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src="../images/hike.jpeg"
                        alt="hiking"
                    />
                    <Carousel.Caption style={{ bottom: "22%", letterSpacing: "10pt" }}>
                        <div>
                            <h1 className="carouselTitle">HIKING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2500}>
                    <img
                        className="d-block w-100"
                        src="../images/bike.jpeg"
                        alt="biking"
                    />
                    <Carousel.Caption style={{ bottom: "22%", letterSpacing: "10pt" }}>
                        <div>
                            <h1 className="carouselTitle">BIKING</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <Row className="rows">
                    <Col className="welcomeMessage">
                        <h2>Welcome to MountainStop!</h2>
                        <p>
                            Mountain sports are well-loved but trip planning can be stressful due to treacherous weather, inadequate resort information, 
                            planning rentals and more. Skiing, snowboarding and hiking for example are highly dependent on safe weather and good conditions 
                            while also being very gear- intensive. When it comes to trip planning, weather information across multiple locations is imperative. 
                            In order to obtain sufficient information on weather and mountain conditions, individuals currently need to go through numerous 
                            applications in order to find sufficient information for multiple locations. Furthermore, trip planning also includes elements 
                            such as rentals, resort information, drive times and availability. There are many existing sites that show weather and some that 
                            show trips but no sites cater to trip planning by including all relevant information on one site while also showing similar mountains 
                            or other trip options.
                        </p>
                        <p>
                            Our web application’s aim is to be a central hub for students, tourists and families to find information before they plan their next outdoor
                            adventure. With this web application, individuals will be able to find the best rentals, weather and mountain conditions, as well as leave 
                            reviews and “share” trips with others. This addresses the critical need for comprehensive trip planning based on factual metrics and real-time 
                            data which will reduce user frustration and increase outdoor sports satisfaction.
                        </p>
                    </Col>
                </Row>
                <Row className="rows">
                    <Col>
                        <Button href="/activites" className= "welcomeButton" variant="outline-dark">Check Out the Activites!</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;