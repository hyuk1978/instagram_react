import React from 'react'
import './explore.css'

function ExploreContainer({ instaUserList }) {
    return (
      <div className='explore_box'>
        {instaUserList.map((user, index) => 
            <div className='explore_item'>
                <img src={user.writeBoard[0].img[0]} alt="" key={user.id} className='explore_item_img'/>
                <div className='explore_like_follow'>
                    <ul>
                        <li>
                            <img src="/images/icon_svg/liked.svg" alt="liked" className='explore_hover_img'/>
                            <span>{user.writeBoard[0].like}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )}
      </div>
    );
  }

export default ExploreContainer