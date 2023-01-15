import Card from 'react-bootstrap/Card';
import { light } from '@mui/material/styles/createPalette';


export default function CardList(props) {
    const {title, src} = props;
    return (
        <Card
            bg={light}
            text={light}
            style={{ width: '100%', margin: '0 1%', background: 'rgba(236, 236, 236, 0.8)'}}
        >
            <Card.Body style={{margin: '1%', padding:'1%'}} >
                <Card.Title style={{fontSize:'medium' }}>{title} </Card.Title>
                <Card.Text>

                    {<img style={{ width: '100%',height: 'auto' }}
                        className="d-block"
                        src={src}
                        alt="First slide"
    />
    
    }
                    
                </Card.Text>
            </Card.Body>
        </Card>
    )
}