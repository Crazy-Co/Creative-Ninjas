import React from 'react'
import resume from '../images/Resume.svg';
const Resume = () => {

  return (
    <div className='resume'>
      <a href="https://drive.google.com/u/0/uc?id=1nGxPLoaxAVUemu998npSS9b3kY4sdgMT&export=download" >Download</a>
      {<p>Loading</p> && <img src={resume} alt="resume" />}
    </div>
  )
}

export default Resume