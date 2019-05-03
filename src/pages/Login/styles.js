import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: colors.secundary,
    padding: metrics.basePadding * 2,
  },
  imageContainer: {
    alignItems: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  inputText: {
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
    marginBottom: metrics.baseMargin,
  },
  input: {
    marginBottom: metrics.baseMargin,
    backgroundColor: colors.whiteTransparent,
    borderRadius: metrics.baseRadius * 2,
    paddingHorizontal: metrics.basePadding,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  error: {
    color: colors.danger,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
