import React, { useState } from 'react'
import Board from '../structure Component/main/Board';
import UpdateStory from '../structure Component/main/UpdateStory';
import Profile from '../structure Component/main/Profile';
import RecommendedUser from '../structure Component/main/RecommendedUser';
import Footer from '../structure Component/main/Footer';
import ProfileTab from '../screens/ProfileTab';
import ExploreContainer from '../structure Component/explore/ExploreContainer';

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
                <UpdateStory userList={instaUserList} onChangeFollowing={onChangeFollowing} />
                <Board instaUserList={instaUserList} onChangeFollowing={onChangeFollowing} handleLikeButtonClick={handleLikeButtonClick}/>
            </div>
            <div className='profile_container'>
                <Profile userList={instaUserList} following={following} />
                <RecommendedUser userList={instaUserList} onChangeFollowing={onChangeFollowing} />
                <Footer/>
            </div>
        </div>
    );
}

export default UserInfo;