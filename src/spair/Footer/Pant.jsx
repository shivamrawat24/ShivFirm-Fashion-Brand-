import React from 'react'
import '../Footer/Pant.css'

function Pant() {
  return (
    <div className='pant'>
        <h2> Company builts</h2>
        <div className='all-holder'>
            <div className="footer-img">
                <img src="" alt="logo" />
            </div>
      <div className="holder">
        <h3>Products</h3>
        <ol>
            <li><a href="#">Casual clothes</a></li>
            <li><a href="#">Office</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Festivals</a></li>
            <li><a href="#">Casuals</a></li>
            <li><a href="#">Other</a></li>
        </ol>
      </div>
      <div className="holder">
        <h3>Top Reviews</h3>
        <ol>
            <li><a href="#">Salman khan</a></li>
            <li><a href="#">Shahrukh khan</a></li>
            <li><a href="#">Shahid kapoor</a></li>
            <li><a href="#">Mukesh</a></li>
            <li><a href="#">Bill gates</a></li>
            <li><a href="#">Aaj Tak</a></li>
        </ol>
      </div>
      <div className="holder">
        <h3> Social Pages</h3>
        <ol>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Customer Care</a></li>
            <li><a href="#">Gmail</a></li>
        </ol>
      </div>
      <div className="holder">
        <h3>Upcoming</h3>
        <ol>
            <li><a href="#">Nothing</a></li>
            <li><a href="#">Nothing</a></li>
            <li><a href="#">Nothing</a></li>
            <li><a href="#">Nothing</a></li>
            <li><a href="#">Nothing</a></li>
        </ol>
      </div>
      </div>
    </div>
  )
}

export default Pant
