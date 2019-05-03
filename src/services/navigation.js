import { NavigationActions } from 'react-navigation';

let navigator;
/**
 * Responsável por conectar a navegação do app pelos components
 */
export function setNavigator(ref) {
  navigator = ref;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}
