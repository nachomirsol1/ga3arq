import { useState, useEffect } from 'react';

export const useChangeImage = (images) => {
	const [imgIndex, setImgIndex] = useState(0);

	useEffect(() => {
		let timer = setTimeout(
			() =>
				setImgIndex((prev) => (imgIndex < images.length - 1 ? prev + 1 : 0)),
			5000
		);

		return () => {
			clearTimeout(timer);
		};
	}, [imgIndex, images.length]);

	const nextImage = () => {
		if (imgIndex < images.length - 1) {
			setImgIndex((prev) => prev + 1);
		}
	};
	const prevImage = () => {
		if (imgIndex > 0) {
			setImgIndex((prev) => prev - imgIndex);
		}
	};

	return { nextImage, prevImage, imgIndex };
};
