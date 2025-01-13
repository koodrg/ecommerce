import { ImgHTMLAttributes } from 'react';

export default function ApplicationLogo(props: ImgHTMLAttributes<HTMLImageElement>) {
    const imageUrl = `${window.location.origin}/images/logo.png`;

    return (
        <img {...props}
             src={imageUrl}
            alt="Lucky Logo"
        />
    );
}
