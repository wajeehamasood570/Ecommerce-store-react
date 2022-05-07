import React from 'react'
import { Card, CardGroup, Container, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Carddetail(props) {
    return (
        <div>
            <div>
                <Container>
                <Link to={`${props.id}`}  className="cardlink" >
                    <CardGroup className="cardd" >
                        <div className="cardstyle">
                            <Card className="carding">
                                <img src={props.img} style={{ height: '12rem' }} />
                                <Card.Body>
                                    <Card.Title>{props.title}</Card.Title>
                                    <Card.Text>
                                        {props.desc}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Karachi &nbsp;&nbsp; &nbsp; updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </div>
                    </CardGroup>
                    </Link>
                </Container>
            </div>




        </div>

    )
}
