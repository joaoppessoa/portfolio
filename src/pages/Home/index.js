import React from 'react';
import Header from '../../components/Header';
import imgDoctor from '../../images/doctor.jpg';
import { Container, Row, Col, Card, CardImg } from 'reactstrap';
import './style.css';

export default function Home(){
    return(
        <>
            <Header /> 
            <Container fluid>
                <Row>
                    <Col md={6}>
                       <Card>
                           <CardImg src={imgDoctor} />
                       </Card>
                    </Col>
                    <Col md={6} >
                        <Row>
                            <Col md='2'></Col>
                            <Col md='8'>
                                <div className='titulo'>
                                    <h1><span>Iran Pessoa</span></h1>
                                </div>

                                <div className='subtitulo' >
                                     <h5><span>Psiquitra clinico</span></h5>  <hr />
                                </div>
                            </Col>
                            <Col md='2'></Col>
                        </Row>

                        <Row>
                        <Col md='2'></Col>
                            <Col md='9'>
                                <div className='paragrafo'>
                                   <p>
                                   Lorem ipsum ullamcorper taciti torquent ad rhoncus cras inceptos 
                                   vivamus feugiat cras tempus molestie, fringilla fusce posuere donec 
                                   ipsum euismod felis porttitor integer platea curabitur rutrum. 
                                   mattis tristique duis varius vulputate libero augue phasellus, 
                                   varius sed in ultricies egestas himenaeos elementum, sagittis 
                                   phasellus mauris netus orci potenti. dolor nisi sem phasellus 
                                   tortor et viverra class venenatis elementum consectetur, 
                                   dictumst mauris eleifend magna pulvinar leo pretium mattis vivamus, 
                                   vehicula taciti rutrum magna aliquam gravida venenatis vitae sodales. 
                                   arcu hendrerit vehicula quis sodales adipiscing convallis lacinia
                                    cubilia aliquet volutpat eget leo, habitant accumsan felis orci 
                                    ullamcorper nisi nibh proin mi aptent scelerisque. 
                                   </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}