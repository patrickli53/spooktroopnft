import React from 'react'
import { Card, Container } from 'react-bootstrap';
import './styles.css';

const Roadmap = () => {
    return (
        <Container id="Roadmap">
            <div className='title'>
                Roadmap
            </div>
            <div>
                <Card className='rmCard'>
                    <Card.Header className='rmHead'>25%</Card.Header>
                    <Card.Body >
                        <Card.Title>AIRDROP</Card.Title>
                        <Card.Text>
                            10 Spook Troop NFTs will be airdropped to holders. (Required to have atleast 1 Spook Troop that is not listed on any market place)                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='rmCard'>
                    <Card.Header className='rmHead'>50%</Card.Header>
                    <Card.Body>
                        <Card.Title>INVITE REWARDS</Card.Title>
                        <Card.Text>
                            The top 5 people with the most invites will recieve rewards in Ethereum as followed:
                            <br />
                            1st will receive 2 Ethereum
                            <br />
                            2nd will receive 1 Ethereum
                            <br />
                            3rd will receive .75 Ethereum
                            <br />
                            4th will receive .5 Ethereum
                            <br />
                            5th will receive .25 Ethereum
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='rmCard'>
                    <Card.Header className='rmHead'>75%</Card.Header>
                    <Card.Body>
                        <Card.Title>SECOND AIRDROP </Card.Title>
                        <Card.Text>
                            5 Random holders of Spook Troop will receive 1 Ethereum
                            <br />

                            Holders are required to have a Spook Troop in their wallet that isn't listed on any marketplace to be eligible.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div>
                <Card className='rmCard'>
                    <Card.Header className='rmHead'>100%</Card.Header>
                    <Card.Body>
                        <Card.Title>FINAL PHASE</Card.Title>
                        <Card.Text>
                            The final phase of the roadmap will be decided by the community, whether that be buying back/burning NFTs that
                            are listed on the market place or providing liquidity for a staking pool.
                            The options are not limited to the two examples provided.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Roadmap
