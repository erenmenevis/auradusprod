import Link from "next/link";
import styles from "../../styles/LabelList.module.css"
import LabelCard from "../../components/LabelCard";
import { getCloudinaryResources, getLogoOverlayed, getTitle, getCategories, uniqueCategories} from '../../utils/cloudinaryHelper'

const Modals = (props) =>  {
  const { categories, images, category } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.squareGrid}>
        
        {categories.map((tag) => {
          const img = images.find((img) => img.tags.includes(tag)); 
          return(
          
            <Link key={tag} className={styles.link} href={
              {
                pathname: `/urunlerimiz/${category}`,
                query: { model: tag }
              }}>
            <LabelCard style={styles.title} title={tag} src={img.url} />
          </Link>
        )
      })
        }
      </div>
    </div>
  )
}

export default Modals;

export async function getStaticProps(context) {
    const { params } = context;
    const category = params.category;
    const resources = await getCloudinaryResources(category);
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
        categories: categories,
        category: category
      },
      revalidate: 10
    }
  }
  
  export async function getStaticPaths() {
    return {
      paths: [
        { params: { category: 'menteseli-acilir-kabinler' } },
        { params: { category: 'surgulu-kayar-kabinler' } }
      ],
      fallback: false
    }
  }