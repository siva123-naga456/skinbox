import {Component} from 'react'
import './index.css'

class Test extends Component {
  render() {
    return (
      <div className="main-container">
        <h1 className="heading">Bundle & Save</h1>
        <div className="one-container">
          <div className="sub1-container">
            <input type="radio" id="one" />
            <div className="sub2-container">
              <label htmlFor="one" className="one-pair">
                1 Pair
              </label>
              <label htmlFor="one" className="dk-pair">
                DKK 195.00
              </label>
            </div>
          </div>
          <p className="dk-pair">50% OFF</p>
        </div>
        <div className="main1-container">
          <div className="two-container">
            <div className="sub1-container">
              <input type="radio" id="two" />
              <div className="sub2-container">
                <label htmlFor="two" className="one-pair">
                  2 Pair
                </label>
                <label htmlFor="two" className="dk-pair">
                  DKK 345.00
                </label>
              </div>
            </div>
            <div>
              <p className="para1">Most Popular</p>
              <p className="dk-pair">40% OFF</p>
            </div>
          </div>
          <div className="second-container">
            <div className="second-sub-container">
              <p className="one-pair">Size</p>
              <div className="select-container">
                <label htmlFor="option-two">#1</label>
                <select id="option-two">
                  <option>S</option>
                  <option>XS</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
              <div className="select-container">
                <label htmlFor="option-two">#2</label>
                <select id="option-two">
                  <option>S</option>
                  <option>XS</option>
                  <option>M</option>
                  <option>L</option>
                </select>
              </div>
            </div>
            <div className="main-colour-container">
              <div className="colour-container">
                <p className="one-pair">Colour</p>
                <select>
                  <option>Colour</option>
                  <option>red</option>
                  <option>green</option>
                  <option>black</option>
                </select>
                <select>
                  <option>Colour</option>
                  <option>red</option>
                  <option>green</option>
                  <option>black</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="one-container">
          <div className="sub1-container">
            <input type="radio" id="one" />
            <div className="sub2-container">
              <label htmlFor="one" className="one-pair">
                3 Pair
              </label>
              <label htmlFor="one" className="dk-pair">
                DKK 528.00
              </label>
            </div>
          </div>
          <p className="dk-pair">50% OFF</p>
        </div>
        <div className="shop-container">
          <p className="para1">free 2 days shopping</p>
          <p>
            Total:<span className="dk-pair">DKK 360.00</span>
          </p>
        </div>
        <button type="button" className="btn">
          + Add to Card
        </button>
      </div>
    )
  }
}
export default Test
