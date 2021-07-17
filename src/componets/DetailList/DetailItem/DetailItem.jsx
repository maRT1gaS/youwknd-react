import './detail-item.sass';
import Fade from 'react-reveal/Fade';

const DetailItem = ({title, detailInfo}) => {
    return ( 
        <Fade left>
            <li className="detail">
                <p className="detail__info"><span className="detail__title">{title}: </span>{detailInfo}</p>
            </li>
        </Fade>
    );
}
 
export default DetailItem;