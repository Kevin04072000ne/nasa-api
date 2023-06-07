import axios from 'axios';
import Swal from 'sweetalert2';

const apiKey = 'YfeNikHVJFCcXLiJntze1GEpWT0uoeEvcEiLqR98';

// Obtener detalles de un planeta específico
export const getMarsPhotos = async (cam) => {
    try {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${cam}&api_key=${apiKey}`);
        return response.data.photos;
    } catch (error) {
        console.error('Error al obtener los detalles de la camara', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un error al obtener los detalles de la camara.'
        });
        throw error;
    }
};