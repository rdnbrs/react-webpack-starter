import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function Home() {

    const buttonClick = () => {
    }

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        1/3
                    </Col>
                    <Col>
                        2/3
                    </Col>
                    <Col>
                        <Button onClick={buttonClick}>Click</Button>
                    </Col>
                </Row>
            </Container>

        </>
    )

}

export default Home
