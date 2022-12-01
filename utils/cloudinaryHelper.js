import cloudinary from "cloudinary";

async function getCloudinaryResources(category) {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // add your cloud_name
      api_key: process.env.CLOUDINARY_API_KEY, // add your api_key
      api_secret: process.env.CLOUDINARY_API_SECRET, // add your api_secret
      secure: true
    });
  
    return cloudinary.v2.search.expression(
      `folder:${category}/*` // add your folder
    ).with_field('tags').sort_by('public_id', 'desc').max_results(30).execute()
      .then((result) => {
        //console.log(result)
        return result.resources
      });
  
  }
  
  function getLogoOverlayed(image_public_id) {
    const url = cloudinary.url(image_public_id,
      {
        angle: 0, gravity: "north_east",
        overlay: { url: "https://res.cloudinary.com/dslizsuil/image/upload/v1668648848/logo-no-background_vmxnbs.png" }, width: 100, x: 0, y: 0, crop: "scale"
      }
    )
    return url;
  
  }
  
  function getTitle(title) {
    let temp = title.split('/')[1];
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }
  
  function getCategories(images) {
    const arr = images.map(img => {
      return [...img.tags]
    });
    return uniqueCategories(arr);
  }
  
  function uniqueCategories(arr) {
    const flatten = arr.reduce((flat, next) => flat.concat(next), []);
    const capitalize = flatten.map(a => a.charAt(0).toUpperCase() + a.slice(1));
    const unique = capitalize.filter((item, i, ar) => ar.indexOf(item) === i);
    return unique;
  
  }

  export {getCloudinaryResources, getLogoOverlayed, getTitle, getCategories, uniqueCategories};