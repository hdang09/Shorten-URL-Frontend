/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from 'react-redux';

import { contrastSelector, modeSelector } from '../app/reducers/customizationReducer';
import { darkTheme, lightTheme } from '../assets/styles/themes';

const getTheme = () => {
    const themeInLocal = useSelector(modeSelector);
    const contrastInLocal = useSelector(contrastSelector);

    if (themeInLocal === 'dark') {
        return darkTheme;
    }

    if (contrastInLocal === true) {
        return {
            ...lightTheme,
            contrastBackground: lightTheme.cardBackground,
        };
    }

    return {
        ...lightTheme,
        contrastBackground: null,
    };
};

export default getTheme;
