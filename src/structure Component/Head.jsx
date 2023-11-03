import React from 'react'
import { Link } from 'react-router-dom'
function Head() {
  return (
        <>
        <header className='tabNav'>
            <div className="head_container">
                <div className='head'>
                    <Link to="/" className='logoTab'>
                        <div className='logo'>
                        </div>
                    </Link>
                    <Link to="/" className='homeTab'>
                    <div className='icon navTab'>
                        <div className='home_icon_image tab_icon'>
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/home_icon.svg`} alt="" />
                        </div>
                        <p>홈</p>
                    </div>
                    </Link>
                    <div className='icon navTab'>
                        <div className="search_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/search_icon.svg`} alt="" />
                        </div>
                        <p>검색</p>
                    </div>
                    {/* <Link to="/Explore"> */}
                        <div className='icon navTab'>
                        <div className="explore_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/explore_icon.svg`} alt="" />
                        </div>
                        <p>탐색 탭</p>
                        </div>
                    {/* </Link> */}
                    {/* <Link to="/Reels"> */}
                        <div className='icon navTab'>
                        <div className="reels_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/reels_icon.svg`} alt="" />
                        </div>
                        <p>릴스</p>
                        </div>
                    {/* </Link> */}
                    <Link to="/">
                        <div className='icon navTab'>
                        <div className="message_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/messsage_icon.svg`} alt="" />
                        </div>
                        <p>메세지</p>
                        </div>
                    </Link>
                    <div className='icon navTab'>
                        <div className="likeIt_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/likeit-icon.svg`} alt="" />
                        </div>
                        <p>알림</p>
                    </div>
                    <div className='icon navTab'>
                        <div className="write_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/write_icon.svg`} alt="" />
                        </div>
                        <p>만들기</p>
                    </div>
                    {/* <Link to="/ProfileTab"> */}
                        <div className='icon navTab'>
                        <div className="profile_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/profile_icon.jpg`} alt="" />
                        </div>
                        <p>프로필</p>
                        </div>
                    {/* </Link> */}
                </div>
                <div className='head_aside'>
                    {/* <Link to="/threads"> */}
                        <div className='icon navTab threads'>
                        <div className="threads_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/threads.svg`} alt="" />
                        </div>
                        <p>Threads</p>
                        </div>
                    {/* </Link> */}
                    <div className='icon navTab'>
                        <div className="moreView_icon_image tab_icon">
                            <img src={`${process.env.PUBLIC_URL}/images/icon_svg/more_view_icon.svg`} alt="" />
                        </div>
                        <p>더 보기</p>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Head