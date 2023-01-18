import styles from "../styles/Preview.module.css"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Preview = ({
    clickedImg,
    setClickedImg,
    handleRotationRight,
    handleRotationLeft
  }) => {
    const handleClick = (e) => {

      if (e.target.classList.contains("dismiss")) {
        setClickedImg(null);
        console.log("clicked image X", clickedImg)
      }
    };
  
    return (
      <>
      <div className={`${styles.wrapper} dismiss`} onClick={handleClick}>
        <div className={`${styles.overlay} dismiss`} onClick={handleClick}>
        <div onClick={handleRotationLeft} className={styles.overlay_arrows_left}>
            <div>
              <ArrowBackIosNewIcon />
            </div>
          </div>
          
          <img src={clickedImg} alt="bigger pic" />
          
          {/*<span className="dismiss" onClick={handleClick}>
            X
    </span>*/}
          
          <div onClick={handleRotationRight} className={styles.overlay_arrows_right}>
            <div>
              <ArrowForwardIosIcon/>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Preview;