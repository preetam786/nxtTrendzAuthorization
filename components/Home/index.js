import {Component} from 'react'
import Header from '../Header'

import './index.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home">
          <div className="responsive-home">
            <div className="clothes-section">
              <h1 className="clothes-heading">Clothes That Get You Noticed</h1>
              <p className="clothes-description">
                fashion is part of the daily air
              </p>
              <button type="button" className="shop-now-button">
                Shop Now
              </button>
            </div>
            <div className="clothes-banner-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                className="clothes-banner"
                alt="clothes that get you noticed"
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Home
