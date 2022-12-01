import React from 'react'
import Link from 'next/link'
import CardList from './CardList'

export default function HomePageLinks(styles) {
    return (
        <div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Sürgülü Kayar Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/dusakabinler">
                <CardList
                    title="Menteşeli Açılır Kabinler"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/dus-tekneleri-ve-kuvet-sistemleri">
                <CardList
                    title="Duş Tekneleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/cam-balkon">
                <CardList
                    title="Cam Balkon"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Profil Renkleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
            <div style={{display:'flex'}}>
            <Link className={styles.link} href="/urunlerimiz/profil-ve-cam-secenekleri">
                <CardList
                    title="Cam Seçenekleri"
                    src="https://res.cloudinary.com/dslizsuil/image/upload/w_700/v1667441545/Carousel/folding2_vvxzcx.jpg"
                />
            </Link>
            </div>
        </div>
    )
}
