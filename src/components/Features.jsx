import React from 'react'
import { Truck, Lock, RotateCcw, Clock } from 'lucide-react'

const features = [
    {icon: Truck, text: 'Free Shipping', subtext: 'On orders over $100'},
    {icon: Lock, text: 'Secure Payment', subtext: '100% protected payments'},
    {icon: RotateCcw, text: 'Easy Returns', subtext: '30-day return policy'},
    {icon: Clock, text: '24/7 Support', subtext: 'Dedicated customer service'},
]
const Features = () => {

  return (
    <div className="features-section">
      <div className="features-inner">
        <h2 className="features-title">Why shop with <span>Voltify</span>?</h2>
        <div className="features-grid">
          {features.map((feature, index)=> {
            return <div key={index} className="feature-card">
              <feature.icon className="feature-icon" aria-hidden="true" />
              <div className="feature-text-wrap">
                <p className="feature-text">{feature.text}</p>
                <p className="feature-subtext">{feature.subtext}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Features
