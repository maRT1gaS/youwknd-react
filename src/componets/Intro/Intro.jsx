import './intro.sass'
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import '../../utils/i18n.js';
import Tada from 'react-reveal/Tada';

const Intro = () => {

    const { t } = useTranslation();

    return (
        <section className="intro">
                <div className="intro__content">
                <Tada>
                    <h1 className="intro__title"> {t('intro.title-trip')} <span className="yellow">youWKND</span></h1>
                    <div className="intro__time"> {t('intro.time-trip')} </div>
                    <div className="intro__cost"> {t('intro.cost-trip')} </div>
                    <HashLink to="/youwknd#registration-travel" smooth className="intro__btn" aria-label={ t('intro.button-order.aria-label') }> {t('intro.button-order.text')} </HashLink>
                    </Tada>
                </div>
        </section>
    )
}

export default Intro;