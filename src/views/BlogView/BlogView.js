import React from 'react'
import "./BlogView.css"
import { useParams } from 'react-router-dom'
import blogs from "./../../data"

function BlogView() {
    const { id } = useParams()
    const selectedBlog = blogs.find((blogData) => blogData.id ===id)
    return (
        <div className='blogView'>
            <h1 className='blogView-title'>{selectedBlog.title}</h1>
            <img src={selectedBlog.image} alt="blog-img" className="blog-img" />
           <div  className='blogView-author'>
            <p>
                <img src={selectedBlog.author.avatar} alt="author" className="author-avatar" /></p>
            <p>{selectedBlog.author.name} | {selectedBlog.date}</p>   
            </div>
            <p className='blogView-content'>{selectedBlog.content}</p>
        </div>
    )
}

export default BlogView

