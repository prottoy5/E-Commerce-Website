import React from 'react'
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-right">
                    <div className="productdisplay-img-list">
                        <img src={props.product.image} alt="" />
                        <img src={props.product.image} alt="" />
                        <img src={props.product.image} alt="" />
                        <img src={props.product.image} alt="" />
                    </div>
                    <div className="productdisplay-img">
                        <img className='productdisplay-main-img' src={props.product.image} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h1>{props.product.name}</h1>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${props.product.old_price}</div>
                    <div className="productdisplay-right-price-new">${props.product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and round nickline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Woman, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay


