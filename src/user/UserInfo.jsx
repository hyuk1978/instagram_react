
import React, { useState } from 'react'
import Board from '../structure Component/main/Board';
import UpdateStory from '../structure Component/main/UpdateStory';
import Profile from '../structure Component/main/Profile';
import RecommendedUser from '../structure Component/main/RecommendedUser';
import Footer from '../structure Component/main/Footer';
import ProfileTab from '../screens/ProfileTab';
import ExploreContainer from '../structure Component/explore/ExploreContainer';

function elapsedText(user) {
    const second = 1;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // 첫 번째 게시물의 날짜 가져오기
    const firstPostDate = user.writeBoard && user.writeBoard[0] && user.writeBoard[0].writeDate;
    if (firstPostDate) {
        const today = new Date(); // 현재 날짜 객체로 초기화
        const elapsedTime = Math.trunc((today - firstPostDate) / 1000); // getTime() 호출 제거

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
    }
    return ''; // 다른 경우에는 빈 문자열 반환
}

// 탐색 탭으로 전달
function ExploreTab( {instaUserList}) {
    const [userList, setUserList] = useState(instaUserList);

    const [following, setFollowing] = useState(false);
    const onChangeFollowing = (id) => {
        setUserList((prevUserList) => {
        return prevUserList.map((user) => {
            if (user.id === id) {
            if (user.following === 0) {
                return { ...user, following: 1 };
            } else {
                return { ...user, following: 0 };
            }
            }
            return user;
        });
        });
    };

    return (
        <div className='main_contents'>
            <ExploreContainer userList={userList} onChangeFollowing={onChangeFollowing} following={following}/>
        </div>
    );
}

// 유저 프로필 상세보기
function ProfileInfo( {instaUserList} ) {
    const [userList, setUserList] = useState(instaUserList);

    const [following, setFollowing] = useState(false);
    const onChangeFollowing = (id) => {
        setUserList((prevUserList) => {
            return prevUserList.map((user) => {
                if (user.id === id) {
                    if (user.following === 0) {
                        return { ...user, following: 1 };
                    } else {
                        return { ...user, following: 0 };
                    }
                }
                return user;
            });
        });
    }
    return(
        <div className='main_contents'>
            <ProfileTab userList={userList}/>
        </div>
    )
}

// 유저 전체
function UserInfo( {instaUserList} ) {
    const [userList, setUserList] = useState(instaUserList);

    const [following, setFollowing] = useState(false);
    const onChangeFollowing = (id) => {
        setUserList((prevUserList) => {
            return prevUserList.map((user) => {
                if (user.id === id) {
                    if (user.following === 0) {
                        return { ...user, following: 1 };
                    } else {
                        return { ...user, following: 0 };
                    }
                }
                return user;
            });
        });
    }
    function handleLikeButtonClick(userIndex, boardIndex, event) {
        const updatedUserList = [...userList];
        const currentLikeStatus = event.currentTarget.classList.contains("liked");
    
        if (currentLikeStatus) {
            updatedUserList[userIndex].writeBoard[boardIndex].like -= 1; // 이미 좋아요 상태인 경우 1 감소
            event.currentTarget.classList.remove("liked");
        } else {
            updatedUserList[userIndex].writeBoard[boardIndex].like += 1; // 좋아요 상태가 아닌 경우 1 증가
            event.currentTarget.classList.add("liked");
        }
    
        setUserList(updatedUserList);
    }
    return (
        <div className='contents_container'>
            <div className='main_contents'>
                <UpdateStory userList={userList} onChangeFollowing={onChangeFollowing} />
                <Board userList={userList} onChangeFollowing={onChangeFollowing} handleLikeButtonClick={handleLikeButtonClick} elapsedText={elapsedText}/>
            </div>
            <div className='profile_container'>
                <Profile userList={userList} following={following} />
                <RecommendedUser userList={userList} onChangeFollowing={onChangeFollowing} />
                <Footer/>
            </div>
        </div>
    );
}

export default UserInfo;