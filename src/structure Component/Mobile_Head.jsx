import React from 'react'

function Mobile_Head() {
  return (
    <div className='Mobile_Header_Container'>
        <div className='Mobile_Header'>
            <div className='Mobile_Logo'>
                <img src={`${process.env.PUBLIC_URL}/images/instagram-logo.png`} alt="" />
            </div>
            <div className='Mobile_Header_icon'>
                <div className="likeIt_icon_image tab_icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon_svg/likeit-icon.svg`} alt="" />
                </div>
                <div className="message_icon_image tab_icon">
                    <img src={`${process.env.PUBLIC_URL}/images/icon_svg/messsage_icon.svg`} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mobile_Head