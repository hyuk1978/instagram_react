import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
// import Header from '../structure Component/Header';
import UserInfo from '../user/UserInfo';
import Head from '../structure Component/Head';
import Mobile_Head from '../structure Component/Mobile_Head';
import Mobile_Footer from '../structure Component/Mobile_Footer';

function Home( {instaUserList} ) {
  return (
    <div className='wrapper'>
      <Head/>
      <div className='side_tab'>
        <Mobile_Head/>
        <section className='contents_container'>
          <main role='main'>
            <UserInfo instaUserList={instaUserList}/>
          </main>
        </section>
      </div>
      <Mobile_Footer/>
    </div>
  );
}


export default Home;