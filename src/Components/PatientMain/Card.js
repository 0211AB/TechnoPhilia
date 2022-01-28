import { useState } from "react"
import './Card.css'

const Card = () => {

  const [cardclassName, setcardClassName] = useState()
  const [flipped, setflipped] = useState(false)

  const flipCard = () => {
    if (flipped)
      setcardClassName('card is-flipped')
    else
      setcardClassName('card')

    setflipped(!flipped)
  }
  return <main className="main-container">
    <div className="scene">
      <div className={cardclassName} onClick={flipCard}>
        <div className="card__front">
          <img src="images/visa-logo.svg" className="card__logo" />
          <div className="card__number number">
            <div className="number-group number-group--0">4011</div>
            <div className="number-group number-group--1">2016</div>
            <div className="number-group number-group--2">7239</div>
            <div className="number-group number-group--3">1586</div>
          </div>
          <div className="card__details">
            <div className="card__holder">
              <span className="card__holder__title">Card Holder</span>
              <span className="card__holder__name">blah blah</span>
            </div>
            <div className="card__expiration">
              <span className="card__expiration__title">dob</span>
              <span className="card__expiration__date">blah blah</span>
            </div>
          </div>
        </div>
        <div className="card__back">
          <div className="card__stripe"></div>
          <div className="card__signature">
            <span className="card__cvv">aadhar number</span>
            <span className="card__cvv-number">2394564548654</span>
          </div>
          <p className="card__info">
            lorem ipsum iipsunm lorem lorem ipsum.
          </p>
        </div>
      </div>
    </div>
  </main>;
};

export default Card;
