import styles from '../styles/Layout.module.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { style } from '@mui/system';


export default function Footer() {
  return (
    <MDBFooter className={`bg-light text-center text-white ${styles.footer}`}>

      <div className={`text-center p-3 ${styles.footer}`}>   
        <span><img src="/logo-no-background.svg" height='30rem'/></span>
        <span>© 2022 Copyright: </span> 
        <span>
        <a className='text-white' href='https://auradus.com/'>
           Aura Dus
        </a>
        </span>
      </div>
    </MDBFooter>
  )
}

// style={{marginBottom:0, paddingBottom:0, position: 'absolute', bottom: '0', width: '99.5%'}}