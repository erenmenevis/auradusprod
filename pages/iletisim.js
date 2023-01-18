import Head from 'next/head'

import styles from '../styles/Iletisim.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import Card from 'react-bootstrap/Card';
import GMaps from '../components/GMaps';
import { light } from '@mui/material/styles/createPalette';
//import styles from '../styles/Home.module.css'

export default function contact() {
  const adress = { latitude: 41.01850896293705, longitude: 29.24890851880833, zoom: 16 }
  const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  return (
    <div className={styles.contentContainer}>
      <div className={styles.rowContentContainer}>
        <Card
          bg={light}
          text={light}
          style={{ maxWidth: '100%' }}
          className="mb-2"
        >
          <Card.Header>İletişim Bilgileri</Card.Header>
          <Card.Body style={{ margin: '5%' }}>
            <Card.Title>Telefon </Card.Title>
            <Card.Text>
              +90 541 154 7901 / +90 541 154 7902
            </Card.Text>
            <Card.Title>Mail </Card.Title>
            <Card.Text>
              serhatkartalauradus@gmail.com
            </Card.Text>
            <Card.Title>Adres </Card.Title>
            <Card.Text>
              <a href='https://goo.gl/maps/fBgc9CnopeYhDf8k8' target="_blank" rel="noopener noreferrer">Namdar Sk. No:2 Yunus Emre, 34791 Sancaktepe/İstanbul
              </a>
            </Card.Text>
            <Card.Text>
              <a href='https://www.instagram.com/auradus2/' target="_blank" rel="noopener noreferrer"><InstagramIcon /> </a>
            </Card.Text>

          </Card.Body>
        </Card>
        <Card
          bg={light}
          text={light}
          style={{ maxWidth:' 100%' }}
          className="mb-2"
        >
          <GMaps />
        </Card>
      </div>
    </div>

  )
}

