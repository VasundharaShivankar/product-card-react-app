import React from 'react'
import "./ProductCards.css"
import { Link } from "react-router-dom"

function ProductCards({ id, image, title, description, instructions, price }) {
  return (<>
    <Link className="product-cards" to={`/blog/${id}`}>
      <img src={image} alt="product-img" className="product-img" />
      <h1 className="product-title">{title}</h1>
      <div className='main-content'>
      <div className="price">
        <span className='product-price'>Price: {price}</span>
      </div>
      <p className="blog-content"><b>Plant Name:</b> {description.plantName}</p>
      <p className="blog-content"><b>Plant Type:</b> {description.plantType}</p>
      <p className="blog-content"><b>Plant Size:</b> {description.size}</p>
      <p className="blog-content"><b>Description:</b> {instructions.substring(0, 118)}...</p>
      </div>
    </Link>
  </>
  )
}

export default ProductCards
