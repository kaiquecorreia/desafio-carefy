import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
/**
 * Ferramenta de Debug
 */
if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron.configure(
    Platform.OS === 'ios' ? {} : { host: '10.0.3.2' },
  )
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
}
