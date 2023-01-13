import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/router";
import CardList from '../../components/CardList';
import LabelList from "../../components/LabelList";
import { getCloudinaryResources, getLogoOverlayed, getTitle, getCategories, uniqueCategories } from '../../utils/cloudinaryHelper'
import styles from "../../styles/Urunler.module.css"


const Categories = (props) => {
  const router = useRouter();
  const model = router.query.model;
  const { images, categories } = props;
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(model);
  
  useEffect(() => {
    setProductList(images);
  }, []);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function getFilteredList() {
    if (!selectedCategory) {
      return productList;
    }
    return productList.filter((item) => {
      if(selectedCategory === 'Tümü')
        return item
      return item.tags.includes(selectedCategory)});
  }

  var filteredList = useMemo(getFilteredList, [selectedCategory, productList]);

  const imageDivs = filteredList.map((image) =>
    <div key={image.id} style={{ display: 'flex', alignItems: 'center' }}>
      <CardList style={{ height: '30rem' }}
        title={image.title}
        src={image.url}
      />
    </div>
  )
  let i = 0
  return <div className={styles.content}>
    <div className={styles.asideMenu}>
        <ul onClick={handleCategoryChange}>
        {categories.map((category) =>
            <option key={category} value={category}>{category}</option>
          )}
          <option key="Tümü" value="Tümü">Tümü</option>
        </ul>
      </div>
    <div className={styles.wrapper}>
      {/*<LabelList categories={categories} images={images} /> */}
      {/*
      <div>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">Tümü</option>
          {categories.map((category) =>
            <option key={category} value={category}>{category}</option>
          )}
        </select>
      </div>
*/}
      <div className={styles.productGridContainer}>
        {imageDivs}
      </div>
    </div>
  </div>
};

export default Categories;

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
      categories: categories
    },
    revalidate: 10
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'menteseli-acilir-kabinler' } },
      { params: { category: 'surgulu-kayar-kabinler' } }, ,
      { params: { category: 'dus-tekneleri-ve-kuvet-sistemleri' } },
      { params: { category: 'cam-balkon' } },
      { params: { category: 'clean-and-clean' } },
      { params: { category: 'guvenlik-filmi' } },
      { params: { category: 'profil-ve-cam-secenekleri' } },
      { params: { category: 'aksesuarlar' } }
    ],
    fallback: false
  }
}