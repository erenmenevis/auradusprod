import styles from '../styles/Kurumsal.module.css'
import Card from 'react-bootstrap/Card';
import { light } from '@mui/material/styles/createPalette';

export default function kurumsal() {
  return (
    <div className={styles.wrapper}>
            <div className={styles.contentContainer}>
    <Card
          bg={light}
          text={light}
          style={{ maxWidth: '80%'}}
          className="mb-2"
        >
          <Card.Body style={{margin: '1rem'}}>
            <Card.Title>Şirket Profili </Card.Title>
            <Card.Text>
            Uzun yıllara dayanan tecrübeli kadrosuyla müşterilerine kaliteli hizmet vermeyi kendisine ilke edinmiş Aura üretimden, 
            ürünün müşteriyle buluşturulmasına kadar her adımda yer almaktadır. Türkiye’nin 81 iline yayılacak bayi ağıyla kalitesinin 
            yanında ulaşılabilinirliği ile de sektörde liderliğe ulaşma hedefindedir.
            </Card.Text>
            <Card.Text>
            Üretimde Ar-Ge faaliyetlerine yaptığı yatırımlarla müşterilerine kaliteyi ucuza götürmeyi kendine misyon edinen 
            Aura 9 farklı seri ve 42 adet duşakabin model çeşidiyle her segmentten müşterilerine hizmet vermektedir.
            </Card.Text>
            <Card.Text>
            Bunlara ek olarak cam balkon, duş teknesi, cam güvenlik filmi, cam kir koruma ilacı gibi farklı ihtiyaçlara da 
            çözüm üretme konusundaki yetkinliği ile rakiplerinden farklılaşma konusunda öncü firmalar arasında yer almaktadır.
            </Card.Text>
            <Card.Title>Misyonumuz</Card.Title>
            <Card.Text>
            Aura müşteri memnuniyeti odağıyla müşterilerine her zaman kalite ve fiyat avantajını aynı anda sağlamayı kendine misyon edinmiştir. 
            Kendisini dünya markası olarak görmek için her türlü Ar-Ge faaliyetlerini yaparak hem müşterilerine hem de ülkesine katma değer 
            yaratma hedefi bulunmaktadır.
            </Card.Text>
            <Card.Title>Vizyonumuz</Card.Title>
            <Card.Text>
            Aura, sektöründe öncü olmak için inovasyonu, global pazar araştırmalarını, müşteri geri bildirimlerini her zaman 
            yakından takip edip, kusursuz müşteri deneyimi sunmayı kendine vizyon edinmiştir.
            </Card.Text>
            <Card.Text>
            -inovasyon: Ar-Ge faaliyetlerimiz neticesinde yeni veya büyük ölçüde değiştirilmiş ürünler 
            ile müşterilerimize her zaman yenilikçi yaklaşımla hizmet vermekteyiz.
            </Card.Text>
            <Card.Text>-Global Pazar Araştırması: Sadece ülkemizde değil dünya piyasasında ne gibi değişiklikler olduğunu 
              yakından takip ederek kendimizi her gün geliştirmekteyiz.</Card.Text>
            <Card.Text>-Müşteri geri bildirimleri: En büyük motivasyonumuz müşteri memnuniyeti olduğu için müşterilerimizden gelen her türlü 
              geri bildirimleri değerlendirip, ürünlerimizin üretim aşamasında bu bildirimleri kullanmaya özen gösteriyoruz. </Card.Text>
          </Card.Body>
        </Card>
        </div>
    </div>
  )
}
