import React from 'react'
import "./Home.css"
import blogs from "./../../data"
import ProductCards from '../../components/ProductCards/ProductCards'

function Home() {
  return (<>
    <h1 className="page-title">Products</h1>
    <div className="blogs-container">
      {
        blogs.map((productData, i) => {
          const {
            id,
            title,
            image,
            description,
            price,
            instructions
          } = productData

          return (<ProductCards
            key={i}
            id={id}
            image={image}
            title={title}
            description={description}
            price={price}
            instructions={instructions}
          />)
        })
      }
    </div>
    </>
  )
}

export default Home
