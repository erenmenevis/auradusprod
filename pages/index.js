import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import BSCarousel from '../components/BSCarousel'
import CardList from '../components/CardList'
import HomePageLinks from '../components/HomePageLinks'
import { getCloudinaryResources, getLogoOverlayed } from '../utils/cloudinaryHelper'


export default function Home(props) {
  const { images } = props;
  return (
    <div>
      <Head>
        <title>Aura Dus</title>
        <meta name="description" content="Aura Dusakabinleri" />
        <meta name="google-site-verification" content="1sQtIFscYiHI_XTWr_0nt0crEpd6u9Mz_YjZa17a7lg" />
        <link rel="icon" href="/logo-no-background.png" />
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.container}>
          <BSCarousel images={images}/>
          <div className={styles.contentContainer}>
          <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Sürgülü Kayar Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907036/Anasayfa/s%C3%BCrg%C3%BCll%C3%BC_kayar_kabinler_ozaato.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Menteşeli Açılır Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907036/Anasayfa/mente%C5%9Feli_ac%C4%B1l%C4%B1r_kabin_gww5nb.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dus-tekneleri-ve-kuvet-sistemleri">
                <CardList
                    title="Duş Tekneleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907035/Anasayfa/du%C5%9F_teknsei_up19np.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/cam-balkon">
                <CardList
                    title="Cam Balkon"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907035/Anasayfa/cam_balkon_gay3b8.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Profil Renkleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907036/Anasayfa/profil_secenekleri_grclbw.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Cam Seçenekleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/c_scale,h_500,w_400/v1669907036/Anasayfa/profil_secenekleri_grclbw.jpg"
                />
            </Link>
            </div>
          </div>

        </div>



      </main>
    </div>
  )
};

export async function getStaticProps(context) {
  const resources = await getCloudinaryResources("Carousel");
  const images = resources.map(resource => {
    return {
      id: resource.asset_id,
      url: getLogoOverlayed(resource.public_id)
    }
  });
  return {
    props: {
      images: images
    },
    revalidate: 10
  }
}
