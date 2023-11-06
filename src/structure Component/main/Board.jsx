import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function likeNotation(user) {
    const like = user.like;
    if(like >= 10000){
        const roundedLikeIt = Math.round(like/1000) / 10;
        return `${roundedLikeIt}만`;
    }
    return user.like;
}
function elapsedText(post) {
    const second = 1;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const today = new Date();
    const postDate = post.writeDate;
    const elapsedTime = Math.trunc((today - postDate) / 1000); 

    if (elapsedTime < second) {
        return '방금 전';
    } else if (elapsedTime < minute) {
        return elapsedTime + '초 전';
    } else if (elapsedTime < hour) {
        return Math.trunc(elapsedTime / minute) + '분 전';
    } else if (elapsedTime < day) {
        return Math.trunc(elapsedTime / hour) + '시간 전';
    } else if (elapsedTime < day * 15) {
        return Math.trunc(elapsedTime / day) + '일 전';
    }
    return ''; 
}


function Board({ instaUserList, onChangeFollowing, handleLikeButtonClick }) {
    return (
        <section className='update_board'>
            {instaUserList.map((user, userIndex) => (
                <div className='board_user_profile' key={user.id}>
                    {user.writeBoard && user.writeBoard.map((board, boardIndex) => (
                        <article className='board_user_profile_container' key={board.writeBoardId}>
                            <div className='board_user_profile_header'>
                                <div className='board_user_profile_header'>
                                    {user.img && <img src={user.img} alt={user.name} className='board_profile_img' />}
                                    <p className='border_profile_name'>{user.nickname}</p>
                                    <span className='write_date'>{elapsedText(board)}</span>
                                    <button onClick={() => onChangeFollowing(user.id)} className='follow_btn'>
                                        {user.following === 0 ? <p>팔로우</p> : <p>팔로잉</p>}
                                    </button>
                                </div>
                                <button className='board_user_profile_header_right'>
                                </button>
                            </div>
                            <div className='board_contents'>
                                <div key={board.writeBoardId} >
                                    <Carousel className='board_slide_img'
                                        showArrows={true}
                                        centerMode={false}
                                        showThumbs={false}
                                        showStatus={false}
                                    >
                                        {board.img.map((imgUrl, index) => (
                                            <img key={index} src={imgUrl} draggable="false" alt={user.name} className='board_profile_img'  />
                                        ))}
                                    </Carousel>
                                    <div className='board_btn'>
                                        <ul>
                                            <li className='board_btn_img'  
                                            onClick={(event) => handleLikeButtonClick(userIndex, boardIndex, event)}>
                                            </li>
                                            <li className='board_btn_img'>
                                            </li>
                                            <li className='board_btn_img'>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className='board_btn_img_right'>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='likeIt'>
                                        <p>좋아요 {likeNotation(board)}개</p>
                                    </div>
                                        <div className='board_text'><span>{user.nickname}</span> {board.title}</div>
                                    <div className='comment_form'>
                                        <form>
                                            <input type="text" placeholder='댓글 달기...'/>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            ))}
        </section>
    );
}

export default Board;