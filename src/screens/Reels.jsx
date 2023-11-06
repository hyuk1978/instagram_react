import React from 'react'
import Head from '../structure Component/Head'
import Mobile_Head from '../structure Component/Mobile_Head'
import Mobile_Footer from '../structure Component/Mobile_Footer'
import ReelsContents from '../structure Component/reels/ReelsContents'
// import Header from '../structure Component/Header'

function Reels() {
  return (
    <div>
        {/* <Header/> */}
        <Head/>
        <Mobile_Head/>
        <ReelsContents/>
        <Mobile_Footer/>
    </div>
  )
}

export default Reels