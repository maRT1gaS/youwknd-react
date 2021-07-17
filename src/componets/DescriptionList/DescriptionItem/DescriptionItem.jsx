import './description-item.sass';
import CheckMark from '../../../assets/svg/check-mark.svg';
import Fade from 'react-reveal/Fade';

const DescriptionItem = ({title, info}) => {
    return (
        <Fade left>
            <li className="description">
                <img src={CheckMark} alt="Check Mark" className="description__check-mark" />
                <div className="description__content">
                    <h2 className="description__title">{title}</h2>
                    <p className="description__info">{info}</p>
                </div>
            </li>
        </Fade>
    )
}

export default DescriptionItem;