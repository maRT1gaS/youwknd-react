import './description-list.sass';
import DescriptionItem from './DescriptionItem/DescriptionItem';
import '../../utils/i18n.js';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';

const Descriptionlist = () => {

    const { t } = useTranslation();
    const descriptionObj = t('description.description-list', { returnObjects: true });

    return (
        <section className="description-travel" id="description">
            <div className="container container--center">
                <Zoom>
                    <h2 className="description-travel__title">{ t('description.title-section') }</h2>
                </Zoom>
                    <ul className="description-travel__list">
                        {descriptionObj.map((item, index) => {
                            return <DescriptionItem key={index} title={item.title} info={item.info}/>
                        })}
                    </ul>
            </div>
        </section>
    );
}
 
export default Descriptionlist;