import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './App.css';

const App = () => {
  return (
    <>
      <div className='app-container'>
        <nav className='nav-container'>
          <div>
            <h1 className='heading'>FireFly</h1>
          </div>
        </nav>
        <div className='sub-container'>
          <p className='para'>
            The Choice is Yours.<br/>
            Because they don't have one
          </p>
          <button className='butt' type="button">QUICK VIEW</button>
        </div>
      </div>

      <div className='about-container'>
        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719038012/Frame_hfdbry.png" alt="line" />
        <p className='para1'>About</p>
        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719038012/Frame_hfdbry.png" alt="line" />

        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719051476/Frame_1_kvs7tn.png" alt="fireworks" className='fire' />

        <p className='para2'>
          Our Product are crafted exclusively from the dreams and scream of young kids who wanted to show their mastery in their <br/> chosen fields,
          but were directed towards a factory for daily wages. Each cracker brighter than lost smiles, and can be heard louder than their cries for miles.
          But them, burst them, brag about them.
        </p>
        <p className='para3'>The choice is yours. Because they don't have one.</p>

        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719051476/Frame_1_kvs7tn.png" alt="fireworks" className='fire2' />
      </div>

      <div className='product-container'>
        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719038012/Frame_hfdbry.png" alt="line" />
        <p className='para1'>Our product</p>
        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719038012/Frame_hfdbry.png" alt="line" />

        <div className='product'>
          <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719054309/Frame_7_2_c6aecn.png" alt="product" />
          <p className='name'>Raju Rassibomb</p>
          <div className='button-container'>
            <div className="popup-container">
              <Popup
                modal
                trigger={
                  <button type="button" className='butt'>QUICK VIEW</button>
                }
              >
                {close => (
                  <>
                    <div className='pops'>
                      <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719054309/Frame_7_2_c6aecn.png" alt='pp' />
                      <p>Raju Rassibomb</p>
                      <p>MRP</p>
                      <p>Raju's Dreams/-</p>
                      <hr className='dot' />
                      <p>Product Description</p>
                      <p>This product packs an extra punch, thanks to the literal blood sweat tears of a young boy</p>
                      <hr className='dot' />
                      <p>Product Contents :</p>
                      <ul>
                        <li>10 hands-hurting of rassi bombs</li>
                        <li>Filled with great pain</li>
                        <li>Raju's hopes</li>
                      </ul>
                      <hr className='dot' />
                      <p>Shipping Time</p>
                      <p>Before Raju understands that his dreams do not matter</p>
                    </div>
                    <button
                      type="button"
                      className="trigger-button"
                      onClick={() => close()}
                    >
                      Close
                    </button>
                  </>
                )}
              </Popup>
            </div>
          </div>
        </div>

        <div className='product'>
          <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719054309/Frame_7_2_c6aecn.png" alt="product" />
          <p className='name'>Ladiyon ki Rani Chani</p>
          <div className='button-container'>
            <button type="button" className='butt'>QUICK VIEW</button>
          </div>
        </div>

        <img src="https://res.cloudinary.com/dsqi87vu5/image/upload/v1719057424/Frame_2_tbtdjv.png" alt="line" className='lines' />
      </div>
    </>
  )
}

export default App;





