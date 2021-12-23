import './index.css'

const ResultItems = props => {
  const {imagesDetails, compareImageId} = props
  const {imageUrl, id} = imagesDetails
  const onClickImage = () => {
    compareImageId(id)
  }
  return (
    <li className="list-item-image">
      <button className="button" type="button">
        <img
          src={imageUrl}
          alt="match"
          className="list-image"
          onClick={onClickImage}
        />
      </button>
    </li>
  )
}
export default ResultItems
