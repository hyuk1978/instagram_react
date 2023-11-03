import React from 'react'
import { Link } from 'react-router-dom'

function Mobile_Footer() {
  return (
    <div className='Mobile_Footer_Container'>
        <div className='Mobile_Footer'>
            <ul>
                <li>
                    <Link to="/" className='homeTab'>
                        <div className='icon navTab'>
                            <div className='home_icon_image tab_icon'>
                                <img src={`${process.env.PUBLIC_URL}/images/icon_svg/home_icon.svg`} alt="" />
                            </div>
                        </div>
                    </Link>
                </li>
                <li>
                    <div className="search_icon_image tab_icon">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_svg/search_icon.svg`} alt="" />
                    </div>
                </li>
                <li>
                    <div className="write_icon_image tab_icon">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_svg/write_icon.svg`} alt="" />
                    </div>
                </li>
                <li>
                    <div className="reels_icon_image tab_icon">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_svg/reels_icon.svg`} alt="" />
                    </div>
                </li>
                <li>
                    <div className="profile_icon_image tab_icon">
                        <img src={`${process.env.PUBLIC_URL}/images/icon_svg/profile_icon.jpg`} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Mobile_Footer