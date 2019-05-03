import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: metrics.baseMargin,
  },
  info: {
    flexDirection: 'row',
    marginRight: metrics.baseMargin,
    alignItems: 'center',
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    flexWrap: 'wrap',
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin,
  },
});
export default styles;
