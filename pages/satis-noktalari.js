import styles from '../styles/Kurumsal.module.css'
import Card from 'react-bootstrap/Card';
import { light } from '@mui/material/styles/createPalette';

export default function satisnoktalari() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentContainer}>
        <div style={{margin:'10% 0'}}>
        <Card
          bg={light}
          text={light}
          style={{ maxWidth: '100%' }}
          className="mb-2"
        >
          <Card.Header>Satış Noktaları</Card.Header>
          <Card.Body style={{ margin: '1rem' }}>
            <Card.Text>
              Firma yetkililerinden detaylı bilgi alabilirsiniz.
            </Card.Text>
            <Card.Text>
              0541 151 79 01 | 0541 151 79 02
            </Card.Text>
          </Card.Body>
        </Card>
        
        </div>
      </div>
    </div>
  )
}
