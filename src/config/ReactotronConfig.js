import { Platform } from 'react-native';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure(
    Platform.OS === 'ios' ? {} : { host: '10.0.3.2' },
  )
    .useReactNative()
    .connect();
  console.tron = tron;
  tron.clear();
}
