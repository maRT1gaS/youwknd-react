import { NativeSelect } from '@material-ui/core';
import './change-language.sass';
import '../../../utils/i18n';
import { useTranslation } from 'react-i18next';

const ChangeLanguage = () => {

    const defaultLanguage = localStorage.getItem('i18nextLng');

    const { i18n } = useTranslation();

    const handleChanges = (e) => {
        if (e.target.value === 'ru') {
            i18n.changeLanguage('ru');
        }
        if (e.target.value === 'en') {
            i18n.changeLanguage('en');
        }
    }

    return ( 
        <div className="language" aria-label="Смена языка">
            <NativeSelect
            defaultValue={defaultLanguage}
            onChange={handleChanges}
            inputProps={{
            name: 'language',
            id: 'change-language',
            }}>
                <option value={'ru'}>Русский</option>
                <option value={'en'}>English</option>
            </NativeSelect>
        </div>
    );
}
 
export default ChangeLanguage;