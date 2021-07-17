import './ImageItem.sass';
import Fade from 'react-reveal/Fade';

const ImageItem = ({ img, alt }) => {
    return ( 
        <Fade top>
            <li className="image-item">
                    <img src={img} alt={alt} title={alt} className="image-item__img"/>
            </li>
        </Fade>
    );
}
 
export default ImageItem;