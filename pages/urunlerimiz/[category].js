import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/router";
import CardList from '../../components/CardList';
import Preview from "../../components/Preview";
import { getCloudinaryResources, getLogoOverlayed, getTitle, getCategories, uniqueCategories } from '../../utils/cloudinaryHelper'
import styles from "../../styles/Urunler.module.css"


const Categories = (props) => {
  const router = useRouter();
  const model = router.query.model;
  const { images, categories } = props;
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(model);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(filteredList.findIndex((img) => img.id === index));
    setClickedImg(item.url);
  };

  const handleRotationRight = () => {
    const totalLength = filteredList.length;    
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = filteredList[0].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = filteredList.filter((item) => {
      return filteredList.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = filteredList.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = filteredList[totalLength - 1].url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = filteredList.filter((item) => {
      return filteredList.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
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
    <div key={image.id} style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleClick(image, image.id)}>
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
      <div className={styles.productGridContainer}>
        {imageDivs}
      </div>
      <div>
        {clickedImg && (
          <Preview
            clickedImg={clickedImg}
            handleRotationRight={handleRotationRight}
            setClickedImg={setClickedImg}
            handleRotationLeft={handleRotationLeft}
          />
        )}
      </div>
    </div>
  </div>
};

export default Categories;

export async function getStaticProps(context) {
  const { params } = context;
  const category = params.category;
  let resources;
  if(category === "dusakabinler"){
    const surgulu = await getCloudinaryResources("surgulu-kayar-kabinler");
    const menteseli = await getCloudinaryResources("menteseli-acilir-kabinler")
    resources = surgulu.concat(menteseli);
  }
  else{
    resources = await getCloudinaryResources(category);
  }
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
      { params: { category: 'dusakabinler' } },
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