import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
// import Header from '../structure Component/Header';
import UserInfo from '../user/UserInfo';
import Head from '../structure Component/Head';

function Home() {
  return (
    <div className='wrapper'>
      <Head/>
      <div className='side_tab'>
        <section className='contents_container'>
          <main role='main'>
            <UserInfo/>
          </main>
        </section>
      </div>
    </div>
  );
}


export default Home;