import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


function elapsedText(user) {
    // 초, 분, 시간, 일 간격 정의
    const second = 1;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    // 현재 시간 가져오기
    const today = new Date(); 

    let firstPostDate; // 첫 번째 게시물의 날짜를 저장하기 위한 변수

    // 게시글이 존재하고 최소 하나의 게시물이 있을 때
    if (user.writeBoard && user.writeBoard.length > 0) {
        firstPostDate = user.writeBoard[0].writeDate;
    }
    // 게시 시간과 현재 시간 간의 경과 시간 계산
    if (firstPostDate) {
        const elapsedTime = Math.trunc((today - firstPostDate) / 1000);

        if (elapsedTime < second) {
            return '방금';
        } else if (elapsedTime < minute) {
            return elapsedTime + '초';
        } else if (elapsedTime < hour) {
            return Math.trunc(elapsedTime / minute) + '분';
        } else if (elapsedTime < day) {
            return Math.trunc(elapsedTime / hour) + '시간';
        } else if (elapsedTime < week) {
            return Math.trunc(elapsedTime / day) + '일';
        } else {
            return Math.trunc(elapsedTime / week) + '주';
        }
    }
    return '';
}

function likeNotation(user) {
    const like = user.like;
    if(like >= 10000){
        const roundedLikeIt = Math.round(like/1000) / 10;
        return `${roundedLikeIt}만`;
    }
    return user.like;
}

function Board({ userList, onChangeFollowing, handleLikeButtonClick }) {
    return (
        <section className='update_board'>
            {userList.map((user, userIndex) => (
                <div className='board_user_profile board_user_profile_container' key={user.id}>
                    <div className='board_user_profile_header'>
                        <div className='board_user_profile_header'>
                            {user.img && <img src={user.img} alt={user.name} className='board_profile_img' />}
                            <p className='border_profile_name'>{user.nickname}</p>
                            <span>{elapsedText(user)}</span>
                            <button onClick={() => onChangeFollowing(user.id)} className='follow_btn'>
                                {user.following === 0 ? <p>팔로우</p> : <p style={{ color: 'black' }}>팔로잉</p>}
                            </button>
                        </div>
                        <button className='board_user_profile_header_right'>
                        </button>
                    </div>
                    <div className='board_contents'>
                        {user.writeBoard && user.writeBoard.map((board, boardIndex) => (
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
                                        <li className='board_btn_img'  onClick={(event) => handleLikeButtonClick(userIndex, boardIndex, event)}>
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
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Board;