import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Countdown from 'react-countdown';
import './styles.css';
const renderer = ({ days, hours, minutes, seconds }) => {
    // Render a countdown
    return <div>
        <Row className='cdRow'>
            <Col >
                <div className='countdownBox'>
                    {days}
                    <br />
                    DAYS
                </div>

            </Col>
            <Col>
                <div className='countdownBox'>
                    {hours}
                    <br />
                    HRS
                </div>
            </Col>
            <Col>
                <div className='countdownBox'>
                    {minutes}
                    <br />
                    MINS
                </div>
            </Col>
            <Col>
                <div className='countdownBox'>
                    {seconds}
                    <br />
                    SECS
                </div>
            </Col>
        </Row>
    </div>;
};

const CountdownComp = () => {
    return (
        <Countdown date={new Date("October 30, 2021 13:00:00")} renderer={renderer} />
    )
}

export default CountdownComp
