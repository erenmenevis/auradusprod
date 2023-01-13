import styles from "../styles/LabelList.module.css"
import LabelCard from "../components/LabelCard";
import { getCloudinaryResources, getLogoOverlayed, getTitle, getCategories, uniqueCategories} from '../utils/cloudinaryHelper'

export default function dusakabinmodelleri(props) {
  const { categories, images } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.squareGrid}>
        
        {categories.map((category) => {
          const img = images.find((img) => img.tags.includes(category)); 
          return(
          
          <div key={category} >
            <LabelCard title={category} src={img.url} />
          </div>
        )
      })
        }
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
    const { params } = context;
    //const category = params.category;
    const resources = await getCloudinaryResources('aksesuarlar');
    const images = resources.map(resource => {
      return {
        id: resource.asset_id,
        title: getTitle(resource.public_id),
        url: getLogoOverlayed(resource.public_id),
        tags: uniqueCategories(resource.tags)
      }
    });
    const categories = getCategories(images);
    return {
      props: {
        images: images,
        categories: categories
      },
      revalidate: 10
    }
  }
  
  /*export async function getStaticPaths() {
    return {
      paths: [
        { params: { category: 'menteseli-acilir-kabinler' } },
        { params: { category: 'surgulu-kayar-kabinler' } },,
        { params: { category: 'dus-tekneleri-ve-kuvet-sistemleri' } },
        { params: { category: 'cam-balkon' } },
        { params: { category: 'clean-and-clean' } },
        { params: { category: 'guvenlik-filmi' } },
        { params: { category: 'profil-ve-cam-secenekleri' } },
        { params: { category: 'aksesuarlar' } }
      ],
      fallback: false
    }
  }*/