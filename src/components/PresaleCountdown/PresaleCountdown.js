import React from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import Countdown from 'react-countdown';

const Finished = () =>  <div>
<span className='minting'>
    
    <a style={{ textDecoration: 'none' }} href="https://etherscan.io/token/0x5dd4235a4833a297c4ce4dcabc7b9921bc795b4b#writeContract" target="_blank"><Button className="mintButton">MINT                                 </Button>
</a>
    <div className='listText'>
        0.025 ETH + gas fees
    </div>

</span>

</div>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Finished />;
    }
    // Render a countdown
    else{
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
    }
};

const PreCountdownComp = () => {
    return (
        <Countdown date={new Date("October 30, 2021 17:00:00")} renderer={renderer} />
    )
}

export default PreCountdownComp
