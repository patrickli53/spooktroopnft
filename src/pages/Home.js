import React from 'react'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import Mint from '../components/Mint/Mint'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Rarity from '../components/Rarity/Rarity'
import Roadmap from '../components/Roadmap/Roadmap'
import './styles.css'
const Home = () => {
    return (
        <div className='home'>
            <NavigationBar />
            <Mint />
            <Roadmap />
            <Rarity />
            <FAQ />
            <Footer />
        </div>
    )
}

export default Home
