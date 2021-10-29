import React from 'react'
import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap'
import heroPic from '../resources/WhatsApp Image 2021-10-25 at 7.49 1.png';
import Select from 'react-select'


import './styles.css'
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import PreCountdownComp from '../components/PresaleCountdown/PresaleCountdown';
const Presale = () => {
    const options = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },

    ]
    const customStyles = {
        option: provided => ({
          ...provided,
          backgroundColor:'black',
          color: 'white'
        }),
        control: provided => ({
          ...provided,
          backgroundColor:'black',
          color: 'white'
        }),
        singleValue: (provided) => ({
          ...provided,
          backgroundColor:'black',
          color: 'white'
        }),
        menu: base => ({
            ...base,
            // override border radius to match the box
            borderRadius: 0,
            // kill the gap
            marginTop: 0
          }),
          menuList: base => ({
            ...base,
            // kill the white space on first and last option
            padding: 0
          })
      }

    return (
        <div>
            <NavigationBar />
            <Container className='heroContainer preBack'>
                <div className='title'>
                    PRESALE
                </div>
                <Row className=''>
                    <Col>
                        <img
                            alt=""
                            src={heroPic}
                            width="450"
                            height="450"
                            className="heroPic"
                        />{' '}
                    </Col>
                    <Col>
                        <div className='heroText'>
                            There are 10,000 monsters roaming around disturbing the peace of the Trick-or-Treater's. Tame your Spook Troop today to save Halloween!                        <br />
                        </div>
                        <PreCountdownComp presale={true}/>
                        {/* <div>
                            <span className='minting'>
                                <Button className="mintButton">
                                    MINT
                                </Button>
                                <Select
                                    options={options}
                                    styles={customStyles}
                                    className='drop' />

                            </span> */}
                            {/* <Button className="mintButton">
                            CONNECT WALLET
                        </Button> */}
                        {/* </div> */}
                    </Col>

                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Presale
