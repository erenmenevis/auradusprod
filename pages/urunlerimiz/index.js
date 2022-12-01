import React from 'react'
import CardList from '../../components/CardList';

export default function Urunlerimiz(props) {
    const { images } = props;

    const imageDivs = images.map((image) =>
        <div key={image.id} style={{ display: 'flex', alignItems:'center', justifyContent:'center' }}>
        <CardList
            title={image.title}
            src={image.url}
        />
        </div>
    )
    return <div style={{ display: 'grid', gridTemplateColumns: '33% 33% 33%', border: '5px solid red' }}>{imageDivs}</div>
}

export async function getStaticProps() { 
    const result = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image`,
        {
            headers: {
                Authorization: `Basic ${Buffer.from(process.env.CLOUDINARY_API_KEY + ':' + process.env.CLOUDINARY_API_SECRET).toString('base64')}`
            }
        }
    ).then(r => r.json());
    const { resources } = result;
    const images = resources.map(resource => {
        return {
            id: resource.asset_id,
            title: resource.public_id,
            url: resource.secure_url
        }
    });
/*
    const folders = await fetch('http://localhost:3000/api/cloudinary').then(r => r.json());
    console.log(folders);
*/
    return {
        props: {
            images: images
        }
    }

}
