import React, {useEffect, useState} from "react"
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import API from "../../contants/api";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import "./style.scss"

const Gallery = () => {
    const [photos, setPhotos] = useState([])
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isShowPopup, togglePopup] = useState(false)

    useEffect(() => {
        axios.get(API.GET_GALLERY)
            .then(r => {
                const formatted = r.data.map(item => item.acf.image)

                setPhotos(formatted)
            })
            .catch(e => console.error(e))
    }, [])

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
                        onClick={() => togglePopup(true)}>
                        <figure>
                            <img src={src}/>
                        </figure>
                    </div>
                )
            }
            {
                isShowPopup &&
                <Lightbox
                    mainSrc={photos[photoIndex]}
                    nextSrc={photos[(photoIndex + 1) % photos.length]}
                    prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
                    onCloseRequest={() => togglePopup(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + photos.length - 1) % photos.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % photos.length)}/>
            }
        </div>
    )
}

export default Gallery