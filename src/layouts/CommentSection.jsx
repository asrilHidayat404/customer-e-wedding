import React from 'react'
import Header from '../components/Header'
import { DiscussionEmbed } from 'disqus-react'

const CommentSection = () => {

  return (
    <div
      className='w-full bg-primary relative lg:py-52 py-32 px-5 lg:px-0'
      style={{
        backgroundImage: 'url(https://t4.ftcdn.net/jpg/06/28/50/45/360_F_628504583_hpCVZftaZLb2bziWgCQKAf8siGyWlvTw.jpg)',
        backgroundSize: "cover"
      }}
    >
      <svg className='absolute top-0 right-0 left-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eab308" fill-opacity="1" d="M0,64L80,58.7C160,53,320,43,480,32C640,21,800,11,960,37.3C1120,64,1280,128,1360,160L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      <Header text="Tiada Yang Dapat Kami Ungkapkan Selain Rasa Terimakasih Dari Hati Yang Tulus Apabila Bapak/ Ibu/ Saudara/i Berkenan Hadir Untuk Memberikan Do'a Restu Kepada Kami" />

      <div className="w-2/3 mx-auto flex flex-col items-center m-10 gap-5">
        <div className='max-w-40 w-40 h-40 max-h-40 rounded-full overflow-hidden'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLaSeL6gJ9M4u1r7hBCbmg1aY-K-PWPoGRTw&s" alt="mempelai" />
        </div>
        <h1 className='text-primary lobster-two-regular lg:text-5xl text-3xl'>Kento' & Taeh</h1>
      </div>

      <div className='lg:w-2/3 bg-blue-50 mx-auto p-10 rounded-xl'>
        <DiscussionEmbed
          shortname='example'
          config={
            {
              url: "http://localhost:5173",
              // identifier: this.props.article.id,
              title: "e-wedding",
              language: 'en' //e.g. for Traditional Chinese (Taiwan)	
            }
          }
        />
      </div>
      <svg className="absolute -bottom-2 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#eab308" fill-opacity="1" d="M0,256L80,250.7C160,245,320,235,480,240C640,245,800,267,960,272C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
    </div>
  )
}

export default CommentSection