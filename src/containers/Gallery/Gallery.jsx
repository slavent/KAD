import React, {useEffect, useState} from "react"
import Loader from "../../components/Loader/Loader";
import API from "../../contants/api";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./style.scss"

const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isShowPopup, togglePopup] = useState(false)

    useEffect(() => {
        const getPhotos = async () => {
            const result = await fetch(API.GET_PHOTOS)
            const response = await result.json()

            setPhotos(response)
        }

        getPhotos()
    }, [])

    const onPreviewClick = index => {
        togglePopup(true)
        setPhotoIndex(index)
    }

    if (!photos.length) {
        return <Loader/>
    }

    return (
        <div className="gallery">
            {
                photos.map((src, key) =>
                    <div
                        key={key}
                        className="gallery__item"
                        onClick={() => onPreviewClick(key)}>
                        <figure>
                            <img src={`/files/${src}`}/>
                        </figure>
                    </div>
                )
            }
            {
                isShowPopup &&
                <Lightbox
                    mainSrc={`/files/${photos[photoIndex]}`}
                    nextSrc={`/files/${photos[(photoIndex + 1) % photos.length]}`}
                    prevSrc={`/files/${photos[(photoIndex + photos.length - 1) % photos.length]}`}
                    onCloseRequest={() => togglePopup(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}/>
            }
        </div>
    )
}

export default Gallery