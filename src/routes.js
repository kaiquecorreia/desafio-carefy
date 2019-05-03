import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { colors } from './styles';

import Login from './pages/Login';
import PatientsList from './pages/PatientsList';
import NewPatient from './pages/NewPatient';
/**
 * Configurções de rotas do app
 */
const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Patients: createBottomTabNavigator(
      {
        PatientsList,
        NewPatient,
      },
      {
        tabBarOptions: {
          showIcon: true,
          showLabel: false,
          activeTintColor: colors.white,
          inactiveTintColor: colors.whiteTransparent,
          style: {
            backgroundColor: colors.secundary,
          },
        },
      },
    ),
  }),
);

export default Routes;
