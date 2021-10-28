import React from 'react'
import { Container } from 'react-bootstrap'
import './styles.css'
import FaqCollapse from './FaqCollapse'

const FAQ = () => {
    
    return (
        <>
            <Container id="FAQ" className='faqCon'>
                <div className='title'>
                    FAQs
                </div>
                <FaqCollapse 
                    question='Why Tame a Spook Troop?' 
                    answer='Spook Troops is a collection developed by motivated NFT collectors that strive to build a community where everyone
                    "wins". This shows through our roadmap as we are constantly giving back to the people that are committed to growing
                    the community as well as letting the community decide how they want us to provide for everyone during the final
                    phase!'
                />
                <FaqCollapse 
                    question='Minting Process' 
                    answer='Each Spook Troop will cost .025 ETH + gas fees. 
                    The Presale will begin on October 30th, @1:00pm EST and will continue for 2 hours and will the lead to the public sale. 
                    The Public Sale will begin just 2 hours after the presale on October 30th, @3:00pm EST. 
                    '
                />
                <FaqCollapse 
                    question='Whitelist' 
                    answer='The first 1,000 people in the discord to react with the message in #Whitelist on the discord to become whitelisted
                    These people will have a for sure spot at minting Spook Troops
                    '
                />
                 <FaqCollapse 
                    question='Tokenomics' 
                    answer='The team will be holding around 50 Spook Troops for giveaways and rewards to the community. These rewards will 
                    be given out weekly to the most active members on the discord as well as influencers that shout us out or are
                    simply supporting of the community.'
                />
            </Container>
        </>
    )
}

export default FAQ
