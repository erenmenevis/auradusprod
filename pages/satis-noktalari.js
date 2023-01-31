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

            <Card.Text>
            <strong>Hizmet verdiğimiz şehirler ve semtler:</strong>
            </Card.Text>
            <Card.Text>

ADANA, 
ADIYAMAN, 
AFYONKARAHİSAR, 
AĞRI, 
AKSARAY, 
AMASYA, 
ANKARA, 
ANTALYA, 
ARDAHAN, 
ARTVİN, 
AYDIN, 
BALIKESİR, 
BARTIN, 
BATMAN, 
BAYBURT, 
BİLECİK, 
BİNGÖL, 
BİTLİS, 
BOLU, 
BURDUR, 
BURSA, 
ÇANAKKALE, 
ÇANKIRI, 
ÇORUM, 
DENİZLİ, 
DİYARBAKIR, 
DÜZCE, 
EDİRNE, 
ELAZIĞ, 
ENTEGRASYON, 
ERZİNCAN, 
ERZURUM, 
ESKİŞEHİR, 
GAZİANTEP, 
GİRESUN, 
GÜMÜŞHANE, 
HAKKARİ, 
HATAY, 
IĞDIR, 
ISPARTA, 
İZMİR, 
KAHRAMANMARAŞ, 
KARABÜK, 
KARAMAN, 
KARS, 
KASTAMONU, 
KAYSERİ, 
KIRIKKALE, 
KIRKLARELİ,
KIRŞEHİR, 
KİLİS, 
KOCAELİ, 
KONYA, 
KÜTAHYA, 
MALATYA, 
MANİSA, 
MARDİN,
MERSİN, 
MUĞLA, 
MUŞ, 
NEVŞEHİR, 
NİĞDE, 
ORDU, 
OSMANİYE, 
RİZE, 
SAKARYA, 
SAMSUN, 
SİİRT, 
SİNOP, 
SİVAS, 
ŞANLIURFA, 
ŞIRNAK, 
TEKİRDAĞ, 
TOKAT, 
TRABZON, 
TUNCELİ, 
UŞAK, 
VAN, 
YALOVA, 
YOZGAT, 
YURTDIŞI, 
ZONGULDAK
</Card.Text>
<Card.Text>
<strong>İSTANBUL: </strong>

AVCILAR, BAĞCILAR, BAHÇELİEVLER, BAKIRKÖY, BAYRAMPAŞA, BEŞİKTAŞ, BEYKOZ, BEYOĞLU, BÜYÜKÇEKMECE, ÇATALCA, ESENLER, EYÜPSULTAN, FATİH, GAZİOSMANPAŞA, GÜNGÖREN, KADIKÖY, KAĞITHANE, KARTAL, KÜÇÜKÇEKMECE, MALTEPE, PENDİK, SARIYER, SİLİVRİ, SULTANBEYLİ, ŞİLE, ŞİŞLİ, TUZLA, ÜMRANİYE, ÜSKÜDAR, ZEYTİNBURNU, ARNAVUTKÖY, ATAŞEHİR, BAŞAKŞEHİR, BEYLİKDÜZÜ, ÇEKMEKÖY, ESENYURT, SANCAKTEPE, SULTANGAZİ, ADALAR,
            </Card.Text>
          </Card.Body>
        </Card>
        
        </div>
      </div>
    </div>
  )
}
