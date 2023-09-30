import React from 'react'
import Header from '../heading/Header'
import Footer from '../footer/Footer'
import VideoGenerator from './VideoGenerator'
import ReactPlayer from 'react-player'
import videocss from './videocss.css'
const CourseVideo = (props) => {
const videoSource = "https://youtu.be/K2VfC9ZYQss";

  return (
    <>
      <Header/>
      <section >
        <h2 class="titlecr"></h2>
        <div className='containercr rounded border-4 border-black'>
            <div id="video_player">
             <img src='https://miro.medium.com/v2/resize:fit:1200/0*M4bxiCIjcTK-2Xr6.jpeg' className='w-70 opacity-75'/>
            <h3 className='text-center m-3 font-bold'>{props.coursename}Web Development</h3>
            <h3 className='text-center m-3 font-bold'>{props.coursename}Prof. Anuj Sharma</h3>
            </div>
            <div class="playlistBx">
                <div class="headercr">
                    <div class="rowcr">
                        <span class="AllLessons"></span>
                    </div>
                </div>
                <ul class="playlist" id="playlist">
         

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 1</h3>
                  

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtu.be/K2VfC9ZYQss"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 2</h3>
                  

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtu.be/K2VfC9ZYQss"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 3</h3>
                  

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtu.be/K2VfC9ZYQss"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 4</h3>
                  

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtu.be/K2VfC9ZYQss"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 5</h3>
                  

                  <li> <ReactPlayer controls autoplay height={170} id="playlist2" className='rounded-sm' url="https://youtu.be/K2VfC9ZYQss"></ReactPlayer></li>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 6</h3>
                  

                  
                 
                </ul>
            </div>
                <ReactPlayer controls autoplay height={400} id="playlist2" className='rounded-sm w-screen' url="https://youtube.com/playlist?list=PLjVLYmrlmjGdDps6HAwOOVoAtBPAgIOXL"></ReactPlayer>
                  <h3 className=' m-2  text-center border-gray-800 ' >Title Video 1</h3>
                  

        </div>
    </section>
      <Footer/>
      </>
  )
}

export default CourseVideo
