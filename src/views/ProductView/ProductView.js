import React from 'react'
import "./ProductView.css"
import { useParams } from 'react-router-dom'
import blogs from "../../data"

function ProductView() {
    const { id } = useParams()
    const selectedProduct = blogs.find((productData) => productData.id == id)
    return (
        <div className='ProductView'>
            <h1 className='main-heading'>Product-Details</h1>
            <img src={selectedProduct.image} alt="blog-img" className="ProductView-img" />
            <h1 className='ProductView-title'>{selectedProduct.title}</h1>
            <h1 className='ProductView-price'>Price: {selectedProduct.price}</h1>
            <div className='ProductView-content'>
                <p><b>Plant Name:</b> {selectedProduct.description.plantName}</p>
                <p><b>Plant Type:</b> {selectedProduct.description.plantType}</p>
                <p><b>Plant Size:</b> {selectedProduct.description.size}</p>
                <p><b>Plant Placement:</b> {selectedProduct.description.plantPlacement}</p>
                <p><b>Plant Weight:</b> {selectedProduct.description.weight}</p>
                <p><b>Net Quantity:</b> {selectedProduct.description.netQuantity}</p>
                <p><b>Country of Origin:</b> {selectedProduct.description.countryOfOrigin}</p>
            </div>
            <p className='ProductView-content'><b>Delivery Details:</b><br/>{selectedProduct.deliveryDetails}</p>
            <p className='ProductView-content'><b>Instructions:</b><br/>{selectedProduct.instructions}</p>
        </div>
    )
}

export default ProductView

