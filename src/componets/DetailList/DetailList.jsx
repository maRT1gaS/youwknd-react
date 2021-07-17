import './detail-list.sass';
import DetailItem from './DetailItem/DetailItem';
import '../../utils/i18n.js';
import { useTranslation } from 'react-i18next';

const DetailList = () => {
    const { t } = useTranslation();

    return ( 
        <section className="detail-list" id="detail">
            <div className="container container--center">
                <div className="detail-list__content">
                    <ul>
                        <DetailItem title={ t('detail-list.begin-trip.title') } detailInfo={ t('detail-list.begin-trip.detail-info') }/>
                        <DetailItem title={ t('detail-list.end-trip.title') } detailInfo={ t('detail-list.end-trip.detail-info') }/>
                        <DetailItem title={ t('detail-list.cost-trip.title') } detailInfo={ t('detail-list.cost-trip.detail-info') }/>
                        <DetailItem title={ t('detail-list.way-of-moving.title') } detailInfo={ t('detail-list.way-of-moving.detail-info') }/>
                        <DetailItem title={ t('detail-list.groups.title') } detailInfo={ t('detail-list.groups.detail-info') }/>
                        <DetailItem title={ t('detail-list.included.title') } detailInfo={ t('detail-list.included.detail-info') }/>
                        <DetailItem title={ t('detail-list.not-included.title') } detailInfo={ t('detail-list.not-included.detail-info') }/>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default DetailList;