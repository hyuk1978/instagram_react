
import React, { useState } from 'react'
import Board from '../structure Component/main/Board';
import UpdateStory from '../structure Component/main/UpdateStory';
import Profile from '../structure Component/main/Profile';
import RecommendedUser from '../structure Component/main/RecommendedUser';
import Footer from '../structure Component/main/Footer';
import ProfileTab from '../screens/ProfileTab';

const instaUserList = [
    { 
        id: 1,
        nickname: 'hanhyojoo200',
        img :  `${process.env.PUBLIC_URL}/images/user_profile/user1.jpg`,
        date : new Date(169143937814),
        post : 0,
        following : 0,
        followers : 0,
        name : 'Hanhyojoo',
        aboutMe : 'Thanks for visited my profile',
        writeBoard : [
            {
                writeBoardId : 1,
                writeDate : new Date(1698643937812),
                img : [
                    `${process.env.PUBLIC_URL}/images/writeBoard/user1/write1/write1.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user1/write1/write2.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user1/write1/write3.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user1/write1/write4.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user1/write1/write5.jpg`,
                ],
                like : 132587,
                title : '@ferragamo',
                text : ''
            }
        ]
    },
    { 
        id: 2,
        nickname: 'zoinsung',
        img :  `${process.env.PUBLIC_URL}/images/user_profile/user2.jpg`,
        date : new Date(1698643937814),
        post : 0,
        following : 0,
        followers : 0,
        name : '조인성',
        aboutMe : '조인성 배우의 공식 인스타그램입니다.',
        writeBoard : [
            {
                writeBoardId : 1,
                writeDate : new Date(1698613937814),
                img : [
                    `${process.env.PUBLIC_URL}/images/writeBoard/user2/write1/img1.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user2/write1/img2.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user2/write1/img3.jpg`,
                ],
                like : 1201315,
                title : '#어쩌다사장3 #오늘 저녁 8:40 tvN',
                text : '#스트리밍은 TVING'
            }
        ]
    },
    { 
        id: 3,
        nickname: 'ParkBoYoung',
        img :  `${process.env.PUBLIC_URL}/images/user_profile/user3.jpg`,
        date : new Date(1698643937814),
        post : 0,
        following : 0,
        followers : 0,
        name : '박보영',
        aboutMe : 'BH엔터테인먼트와 박보영이 함께 운영하는 인스타그램입니다',
        writeBoard : [
            {
                writeBoardId : 1,
                writeDate : new Date(1698513937814),
                img : [
                    `${process.env.PUBLIC_URL}/images/writeBoard/user3/write1/img1.jpg`,
                ],
                like : 0,
                title : '우리는 모두 낮과 밤을 오가며 산다',
                text : '#정신병동에도아침이와요'
            }
        ]
    },
    { 
        id: 4,
        nickname: 'goyounjung',
        img :  `${process.env.PUBLIC_URL}/images/user_profile/user4.jpg`,
        date : new Date(1698643937814),
        post : 0,
        following : 0,
        followers : 0,
        name : '고윤정',
        aboutMe : '',
        writeBoard : [
            {
                writeBoardId : 1,
                writeDate : new Date(1698113937814),
                img : [
                    `${process.env.PUBLIC_URL}/images/writeBoard/user4/write1/img1.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user4/write1/img2.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user4/write1/img3.jpg`,
                ],
                like : 198,
                title : '부드럽고 달콤한 도넛 맛집',
                text : '@cafeknotted',
                comment : [
                    
                ]
            }
        ]
    },
    { 
        id: 5,
        nickname: 'junjongseo',
        img :  `${process.env.PUBLIC_URL}/images/user_profile/user5.jpg`,
        date : new Date(1698643937814),
        post : 0,
        following : 0,
        followers : 0,
        name : '전종서',
        aboutMe : '',
        writeBoard : [
            {
                writeBoardId : 1,
                writeDate : new Date(1698113937814),
                img : [
                    `${process.env.PUBLIC_URL}/images/writeBoard/user6/write1/img1.jpg`,
                    `${process.env.PUBLIC_URL}/images/writeBoard/user6/write1/img2.jpg`,
                ],
                like : 8527,
                title : '발레리나 개봉했어요 Ballerina just released on Netfilx',
                text : ''
            }
        ]
    },
]

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

// 유저 프로필 상세보기
function ProfileInfo() {
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
        <div>
            <ProfileTab userList={userList}/>
        </div>
    )
}

// 유저 전체
function UserInfo() {
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
                <Board userList={userList} onChangeFollowing={onChangeFollowing} handleLikeButtonClick={handleLikeButtonClick} />
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