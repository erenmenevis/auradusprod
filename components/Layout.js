import Head from 'next/head'
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css"
import StickyWhatsappButton from './StickyWhatsappButton';
function Layout({ children }) {
    return (
        <>
            <div className={styles.wrapper}>
                <Head>
                    <title>Aura Dus</title>
                    <meta name="description" content="Aura DusakabinleriAuraDuş cam balkon, duş teknesi, cam güvenlik filmi, cam kir koruma ilacı gibi ihtiyaçlara çözüm üretme konusundaki yetkinliği ile öncü firmalar arasındadır." />
                    <meta name="keywords" content="istanbul duşakabin, duşakabin istanbul, istanbul duşakabin fiyatları, duşakabin fiyatları, istanbul duş kabini, kompakt duş kabinleri, oval duşakabin, kare duşakabin, dikdörtgen duşakabin, duş, duşakabin, kabin, istanbul, duş teknesi, küvet, vitray, mutfak, banyo" />
                    <meta name="google-site-verification" content="1sQtIFscYiHI_XTWr_0nt0crEpd6u9Mz_YjZa17a7lg" />
                    <link rel="icon" href="/logo-no-background.png" />
                </Head>

                <Header />

                {children}
                <StickyWhatsappButton/>
                <Footer />
            </div>

        </>

    )
}

export default Layout;