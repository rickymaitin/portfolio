import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkdin.com" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <a href="https://facebook.com" target="_blank"><FaFacebookSquare/></a>
      
    </div>
  )
}

export default HeaderSocials
