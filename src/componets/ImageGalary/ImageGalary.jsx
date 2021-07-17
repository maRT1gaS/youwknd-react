import './image-galary.sass';
import ImageItem from './ImageItem/ImageItem';

import '../../utils/i18n.js';
import { useTranslation } from 'react-i18next';

const ImageGalary = () => {
    const { t } = useTranslation();

    return ( 
        <section className="galary-image">
            <div className="container galary-image__container">
                <ul className="galary-image__list">
                    <ImageItem img={"https://i.imgur.com/4LtTo1W.jpg"} alt={ t('image-galary.image1.aria-label') }/>
                    <ImageItem img={"https://i.imgur.com/S4bVK9v.jpg"} alt={ t('image-galary.image2.aria-label') }/>
                    <ImageItem img={"https://i.imgur.com/jKs7Umz.jpg"} alt={ t('image-galary.image3.aria-label') }/>
                </ul>
            </div>
        </section>
    );
}
 
export default ImageGalary;