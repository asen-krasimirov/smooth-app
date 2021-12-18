import { useState } from 'react';

const uploadCloudinaryAPIUrl = 'https://api.cloudinary.com/v1_1/smooth-image-db/image/upload';
// const deleteCloudinaryAPIUrl = 'https://api.cloudinary.com/v1_1/smooth-image-db/image/destroy';

const uploadPreset = 'hhixzynj';
const cloudName = 'smooth-image-db';

function useCloudinaryImage() {
    const [image, setImage] = useState('');

	const uploadImage = () => {
		const data = new FormData();
		data.append('file', image);
		data.append('upload_preset', uploadPreset);
		data.append('cloud_name', cloudName);

		return fetch(uploadCloudinaryAPIUrl, {
			method: 'post',
			body: data
		})
			.then(resp => resp.json())
			.then(data => {
                return data.url;
			})
			.catch(err => console.log(err));
	};

    // const deleteImage = () => {
    //     const data = new FormData();
	// 	data.append('file', image);
	// 	data.append('upload_preset', uploadPreset);
	// 	data.append('cloud_name', cloudName);

	// 	return fetch(deleteCloudinaryAPIUrl, {
	// 		method: 'post',
	// 		body: data
	// 	})
	// 		.then(resp => resp.json())
	// 		.then(data => {
    //             return data.url;
	// 		})
	// 		.catch(err => console.log(err));
    // };

    return { image, setImage, uploadImage };
}

export default useCloudinaryImage;
