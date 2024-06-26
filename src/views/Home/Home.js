import React from 'react'
import "./Home.css"
import blogs from "./../../data"
import Blogcards from '../../components/Blogcards/Blogcards'

function Home() {
  return (<>
    <h1 className="page-title">Blogs</h1>
    <div className="blogs-container">
      {
        blogs.map((blogData, i) => {
          const {
            id,
            title,
            content,
            author,
            date,
            categories
          } = blogData

          return (<Blogcards
            key={i}
            id={id}
            title={title}
            content={content}
            author={author}
            date={date}
            categories={categories}
          />)
        })
      }
    </div>
    </>
  )
}

export default Home
