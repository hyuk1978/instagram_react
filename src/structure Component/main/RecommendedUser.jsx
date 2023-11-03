import React from 'react'
import { Link } from 'react-router-dom'

function RecommendedUser( {userList, onChangeFollowing} ) {
  return (
    <div className='RecommendedUser'>
        <div className='main_right_follow'>
            <h2>회원님을 위한 추천</h2>
            <p>모두보기</p>
        </div>
        {userList && userList.slice(1,5).map((user) => (
            <div className='recommend_follow_users user_profile' key={user.id}>
                <Link to="/">
                    <img src={user.img} alt={user.name} />
                </Link>
                <div>
                    <Link to="/">
                        <strong>{user.nickname}</strong>
                        <p>회원님을 위한 추천</p>
                    </Link>
                    <button onClick={() => onChangeFollowing(user.id)} className='follow_btn'>
                        {user.following === 0 ? <p>팔로우</p> : <p style={{ color: 'black' }}>팔로잉</p>}
                    </button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RecommendedUser