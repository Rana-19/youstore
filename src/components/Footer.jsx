import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <h4>All Rights Reserved &copy; YourShopee.com</h4>
            <span>
                <button><FaFacebook /></button>
                <button><FaInstagramSquare /></button>
                <button><FaTwitterSquare /></button>
                <button><FaLinkedin /></button>
            </span>
        </footer>
    )
}

export default Footer