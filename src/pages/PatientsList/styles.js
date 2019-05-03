import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  listing: {
    marginTop: metrics.baseMargin,
    marginBottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius * 3,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
  listingIcon: {
    color: colors.primary,
  },
  listContainer: {
    marginBottom: metrics.baseMargin,
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
    fontSize: 28,
  },
});
export default styles;
