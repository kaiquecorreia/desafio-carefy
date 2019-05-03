import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { red } from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: metrics.basePadding,
    borderColor: colors.darkTransparent,
    backgroundColor: colors.lighter,
  },

  form: {
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
  },
  icon: {
    textAlign: 'center',
    color: colors.primary,
  },
  title: {
    textAlign: 'center',
    color: colors.regular,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: metrics.baseMargin * 2,
  },
  inputText: {
    fontSize: 15,
    color: colors.primary,
    lineHeight: 21,
    marginBottom: metrics.baseMargin,
  },
  input: {
    borderColor: colors.darkTransparentLight,
    borderWidth: 1,
    marginBottom: metrics.baseMargin,
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
    textAlign: 'center',
    color: colors.danger,
    fontWeight: 'bold',
    fontSize: 16,
    margin: metrics.baseMargin * 2,
  },
});

export default styles;
