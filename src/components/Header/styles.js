import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secundary,
    height: 54,
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  icon: {
    color: colors.white,
  },
});
export default styles;
