import {Component} from 'react'
import './index.css'

class Test extends Component {
  state={one:true,
        two:true,
        three:true} 

  onePairBorderChange=()=>{
    this.setState(prevState=>({one:!prevState.one}))
  }
  twoPairBorderChange=()=>{
    this.setState(prevState=>({two:!prevState.two}))
  }
  threePairBorderChange=()=>{
    this.setState(prevState=>({three:!prevState.three}))
  }
  
  render() {
    const {one,two,three}=this.state
    const Color1=one?"border-color1":"border-color2"
    const Color2=two?"border-color1":"border-color2"
    const Color3=three?"border-color1":"border-color2"
    return (
      <div className={`main-container ${Color1}`}>
        <h1 className="heading">Bundle & Save</h1>
        <div className="one-container" onClick={this.onePairBorderChange}>
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
        <div className={`main1-container${Color2}`} onClick={this.twoPairBorderChange}>
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
        <div className={`one-container${Color3}} onClick={this.threePairBorderChange}>
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
