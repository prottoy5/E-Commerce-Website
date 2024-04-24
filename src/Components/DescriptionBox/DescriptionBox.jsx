import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="ddescriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Our e-commerce platform offers a vast array of products, from fashion to electronics, delivered to your doorstep with ease. Explore the latest trends, exclusive deals, and seamless transactions, making shopping an unforgettable experience. Welcome to your virtual shopping destination.</p>
                <p>
                E-commerce website typically display products or service a product detailed descriptions, images, prices and any available variations(e.g.,size,colors).Each product usually has its own deadline with relevant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox

