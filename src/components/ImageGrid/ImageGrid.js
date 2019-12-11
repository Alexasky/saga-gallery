import React from 'react'
import { connect } from 'react-redux'
import { loadImages } from '../../actions'
import Button from '../Button'
import Stats from '../Stats'
import './styles.css'

const ImageGrid = props => {
  const {images, isLoading, error, loadImages, imageStats} = props

  return(
      <>
        <section className='grid'>
          {images.map((image) => (
            <div className={`item item-${Math.ceil(
              image.height / image.width,
          )}`} key={image.id}>
              <Stats stats={imageStats[image.id]}/>
              <img src={image.urls.small} alt={image.user.username}/>
              {image.description !== null && <div className='description'>{image.description}</div>}
            </div>
          ))}
        </section>
        {error && <div>{JSON.stringify(error)}</div>}
        <Button
          onClick={() => !isLoading && loadImages()}
          loading = {isLoading}
        >
          Load more
        </Button>
      </>
  )
}


const mapStateToProps = ({isLoading, images, error, imageStats}) => ({
  isLoading,
  images,
  error,
  imageStats,
})

const mapDispatchToProps = dispatch => ({
  loadImages: () => dispatch(loadImages()),
})

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(ImageGrid)
