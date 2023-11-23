// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imageUrl, className} = cardDetails
  return (
    <li className={`${className} card`}>
      <h1> {title}</h1>
      <p>{description}</p>
      <div className="imageContainer">
        <img className="person" src={imageUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
