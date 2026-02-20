import React from 'react'
import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <div className="mid-banner-wrapper">
      <div
        className="mid-banner-inner"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="mid-banner-overlay">
            <div className="mid-banner-content">
                <h1 className="mid-banner-title">Upgrade your setup in a single tap</h1>
                <p className="mid-banner-text">Curated laptops, phones, and accessories from trusted brands — with fast delivery and secure checkout on every order.</p>
                <button className="mid-banner-button">Explore Deals</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
