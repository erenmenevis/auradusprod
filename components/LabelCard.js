import { width } from '@mui/system';
import Card from 'react-bootstrap/Card';
import style from '../styles/LabelList.module.css'

function LabelCard(props) {
  const { title, src } = props;
  return (
    <Card className={`text-white ${style.card}`}>
      <Card.Img className={style.cardImg} src={src} alt="Card image" />
      <div className={style.cardLayout}>
        <Card.Title className={style.cardTitle}>{title}</Card.Title>
      </div>
    </Card>
  );
}

export default LabelCard;

/*
.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: var(--bs-card-img-overlay-padding);
    border-radius: var(--bs-card-inner-border-radius);
}
*/