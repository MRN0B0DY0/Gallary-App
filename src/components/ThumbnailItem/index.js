import './index.css'

const ThumbnailItem = props => {
  const {thumbnaillist, thumbnailClick, isActivate} = props
  const {id, imageUrl, imageAltText, thumbnailUrl, thumbnailAltText} =
    thumbnaillist

  const onthumbnailClick = () => {
    thumbnailClick(id, imageUrl, imageAltText)
  }

  const show = isActivate ? 'thumbnail-active' : ' '

  return (
    <li onClick={onthumbnailClick} className={`thumbnail-image ${show}`}>
      <button type="button" className="thumbnail-button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
