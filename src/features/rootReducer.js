import { combineReducers } from 'redux';
import userReducer from './users';
import themeReducer from './theme';
import showFinderReducer from './showFinder';
import idFinderReducer from './idFinder';
import detailsReducer from './showDetails';
import logoReducer from './logoSelector';

const allReducers = combineReducers({

    user: userReducer,
    theme: themeReducer,
    show: showFinderReducer,
    findId: idFinderReducer,
    showDetails: detailsReducer,
    logoDetails: logoReducer,


});


export default allReducers;