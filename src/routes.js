import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './pages/Login';
import Patients from './pages/Patients';

const Routes = createAppContainer(createSwitchNavigator({ Login, Patients }));

export default Routes;
