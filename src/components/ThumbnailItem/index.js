// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, setActiveThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const thumbnailClassName = isActive ? `thumbnail active` : `thumbnail`

  const onClickImage = () => {
    setActiveThumbnailId(id)
  }

  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-button" onClick={onClickImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
