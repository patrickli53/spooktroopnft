import React from 'react'
import './styles.css';
import { FaDiscord, FaTwitter, FaTelegram } from 'react-icons/fa'
const Footer = () => {
    return (
        <>
        <div className='footer'>
            Copyright (C) 2021 spooktroop.com
            <span className='icons'> 
            <a style={{ textDecoration: 'none' }} href="https://discord.gg/pXMhez6Bx5" target="_blank"><FaDiscord/> </a>
            <a style={{ textDecoration: 'none' }} href="https://twitter.com/SpookTroopNFT" target="_blank"><FaTwitter /> </a>
            <a style={{ textDecoration: 'none' }} ><FaTelegram/> </a>    
            </span>
        </div>
        </>
    )
}

export default Footer
