import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import first from '../../resources/1254 1 (1).png';
import second from '../../resources/WhatsApp Image 2021-10-25 at 7.49 2.png';
import third from '../../resources/484 1 (1).png';
import fourth from '../../resources/428 (1) 1.png';
import './styles.css';

const Rarity = () => {
    return (
        <div id="Rarity">
            <div className='title'>
                RARITY
            </div>
            <Container>
                <Row>
                    <Col>
                        <img
                            alt=""
                            src={first}
                            width="280"
                            height="280"
                            className='rPicL'
                        />{' '}
                    </Col>
                    <Col>
                        <img
                            alt=""
                            src={second}
                            width="280"
                            height="280"
                            className='rPicR'

                        />{' '}
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img
                            alt=""
                            src={third}
                            width="280"
                            height="280"
                            className='rPicL'

                        />{' '}
                    </Col>
                    <Col>
                        <img
                            alt=""
                            src={fourth}
                            width="280"
                            height="280"
                            className='rPicR'

                        />{' '}
                    </Col>
                </Row>
                <div className='rarityText'>
                    There are several monsters apart of the Spook Troop terrorizing citizens on Halloween, which include Skeletons, Ghosts, Zombies and even undead Pumpkins!
                    <br/>
                    <br/>

                    Among these 4 different types of monsters, each monster has over 50 unique traits as well as some rare ones that we will leave the community to discover!
                    <br/>
                    <br/>


                    To give back to the big collectors of the collection, we will be providing a few rewards for the holders with the 5 rarest Spook Troops. A week after the collection is sold out the holders with the 5 rarest Spook Troops will be airdropped 1 Ethereum.
                    <br/>
                    <br/>


                    We're going to be airdropping the 1 Ethereum after a week to make sure it is enough time to be
                    set-up for Rarity Tools
                </div>
            </Container>
        </div>
    )
}

export default Rarity
