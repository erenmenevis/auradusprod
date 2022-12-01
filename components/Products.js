import Card from 'react-bootstrap/Card';
import { light } from '@mui/material/styles/createPalette';
import styles from '../styles/Home.module.css'


export default function Products() {

    return (
        <Card
            bg={light}
            text={light}
            className="mb-2"
        >
            <Card.Body style={{ margin: '3%' }}>
                <Card.Title>Telefon </Card.Title>
                <Card.Text>
                    <img style={{ width: '100%', maxWidth: '700px', height: 'auto' }}
                        className="d-block"
                        src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                        alt="First slide"
                    />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}