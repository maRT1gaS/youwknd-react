import './RegistrationTravel.sass';
import telegramIcon from '../../assets/svg/telegram.svg';
import instagramIcon from '../../assets/svg/instagram.svg'
import '../../utils/i18n.js';
import { useTranslation } from 'react-i18next';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';

const RegistrationTraveler = () => {
    const { t } = useTranslation();

    return ( 
        <section className="registration-travel" id="registration-travel">
            <div className="container container--center">
                <div className="registration-travel__content">
                    <Zoom>
                        <h2 className="registration-travel__title">{ t('registration-travel.title') }</h2>
                    </Zoom>
                    <Pulse>
                    <div className="registration-travel__buttons">
                        <a href="https://t.me/joinchat/SH9cfAc6mc8wMTEy" target="_blank" rel="noreferrer">
                            <img src={telegramIcon} alt="Telegram" className="registration-travel__telegram" aria-label={ t('registration-travel.buttons.aria-label-telegram') }/>
                        </a>
                        <a href="https://www.instagram.com/youwknd/" target="_blank" rel="noreferrer">
                            <img src={instagramIcon} alt="Instagram" aria-label={ t('registration-travel.buttons.aria-label-instagram') }/>
                        </a>
                    </div>
                    </Pulse>
                </div>
            </div>
        </section>
    );
}

export default RegistrationTraveler;