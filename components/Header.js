import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/Layout.module.css'

export default function Header() {
  return (
    <Navbar className={styles.navBar} variant="dark" expand="md">
      <Container fluid='sm' className={`m-auto ${styles.container}`}>
      <Navbar.Brand href="/"><img src="/logo-no-background.svg" height='30rem'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.toggle}/>
        <Navbar.Collapse id="basic-navbar-nav" className={`${styles.collapse}`}>
          <Nav className={`m-auto ${styles.nav}`}>
          <Nav.Link href="/">Anasayfa</Nav.Link>
            <NavDropdown title="Ürünlerimiz" id="basic-nav-dropdown">
              <NavDropdown.Item href="/urunlerimiz/dusakabinler">Duşakabinler</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/dus-tekneleri-ve-kuvet-sistemleri">Duş Tekneleri ve Küvet Sistemleri</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/cam-balkon">Cam Balkon</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/clean-and-clean">Clean and Clean</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/safety-film">Safety Film</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/profil-ve-cam-secenekleri">Profil ve Cam Seçenekleri</NavDropdown.Item>
              <NavDropdown.Item href="/urunlerimiz/aksesuarlar">Aksesuarlar</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/satis-noktalari">Satış Noktaları</Nav.Link>
            <Nav.Link href="/kurumsal">Kurumsal</Nav.Link>
            <Nav.Link href="/iletisim ">İletişim</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}
