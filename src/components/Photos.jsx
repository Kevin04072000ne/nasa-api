import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMarsPhotos } from '../utils/nasaAPI';

const Photos = () => {
    const { id } = useParams()
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        (async () => {

            const imgData = await getMarsPhotos(id)
            console.log(imgData)
            setImagenes(imgData || []);
        })()
    }, []);



    return (
        <div className='container'>
            <div className="row d-flex justify-content-center">

                {imagenes ?
                    imagenes.map((data, index) => {
                        return (<div className="card col-9 col-md-5 col-lg-3 me-2 mb-2" key={index}>
                            <img src={data.img_src} class="card-img-top" alt="..."></img>
                            <div class="card-body">
                                <h5 class="card-title">Fecha: {data.earth_date}</h5>
                            </div>
                        </div>)
                    }) : null
                }
            </div>
        </div>
    )
}

export default Photos