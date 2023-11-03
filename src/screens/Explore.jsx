import React from 'react'
import Head from '../structure Component/Head'
import ExploreContainer from '../structure Component/explore/ExploreContainer'

function Explore( { instaUserList } ) {
  return (
    <div className='contents_container'>
        <Head/>
        <div className='explore_box'>
          <ExploreContainer instaUserList={instaUserList}/>
        </div>
       
    </div>
  )
}

export default Explore