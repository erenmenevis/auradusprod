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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.wrapper}>
        <div className={styles.container}>
          <BSCarousel images={images}/>
          <div className={styles.contentContainer}>
          <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Sürgülü Kayar Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Menteşeli Açılır Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/dus-tekneleri-ve-kuvet-sistemleri">
                <CardList
                    title="Duş Tekneleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/cam-balkon">
                <CardList
                    title="Cam Balkon"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Profil Renkleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex', marginTop:'1rem'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Cam Seçenekleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
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
