import React from 'react'
import './styles.css';
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import opensea from '../../resources/Unknown 1.png';
const Footer = () => {
    return (
        <>
            <div className='footer'>
                Copyright (C) 2021 spooktroop.com
                <span className='icons'>
                    <a style={{ textDecoration: 'none' }} href="https://discord.gg/pXMhez6Bx5" target="_blank"><FaDiscord /> </a>
                    <a style={{ textDecoration: 'none' }} href="https://twitter.com/SpookTroopNFT" target="_blank"><FaTwitter /> </a>
                    <a style={{ textDecoration: 'none' }} href="https://twitter.com/SpookTroopNFT">
                        <img
                            alt=""
                            src={opensea}
                            width="35"
                            height="35"
                            // className='rPicL'
                        />{' '}</a>
                </span>
            </div>
        </>
    )
}

export default Footer
