import React from 'react'
import './Product.css'
import StarRateIcon from '@material-ui/icons/StarRate'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, priceToShow, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        // priceToShow: priceToShow,
        rating: rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__description">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{priceToShow}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon key={i} className="product__ratingStars" />
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
