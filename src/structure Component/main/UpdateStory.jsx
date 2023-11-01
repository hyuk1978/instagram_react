import React, { useState } from 'react'

function UpdateStory({ userList, onChangeFollowing }) {
    
  return (
    <>
    <section className='story_tab'>
        <ul>
        {userList && userList.map((user) => (
            <li className='update_story' key={user.id}>
            <div className='profile_img_container'>
                {user.img && <img src={user.img} alt={user.name}  className='profile_img'/>}
            </div>
            <p className='profile_name'>{user.nickname}</p>
            </li>
        ))}
        </ul>
    </section>
    </>
  )
}

export default UpdateStory

