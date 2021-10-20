import React, {useEffect, useState} from "react"
import Loader from "../../components/Loader/Loader";
import axios from "axios";
import API from "../../contants/api";
import "./style.scss"

const Gallery = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        axios.get(API.GET_GALLERY)
            .then(r => setPhotos(r.data))
            .catch(e => console.error(e))
    }, [])

    if (!photos.length) {
        return <Loader/>
    }

    return (
        <div className="gallery">
            {
                photos.map((item, key) =>
                    <div key={key} className="gallery__item">
                        <img src={item.acf.image}/>
                    </div>
                )
            }
        </div>
    )
}

export default Gallery