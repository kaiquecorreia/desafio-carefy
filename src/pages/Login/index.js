import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import { Creators as LoginActions } from '../../store/ducks/login';
import styles from './styles';
import { navigate } from '../../services/navigation';
import Logo from '../../assets/images/logo.png';
class Login extends Component {
  /**
   * Estados de login
   */
  state = {
    email: '',
    password: '',
  };
  /**
   * Validação de props via propTypes
   */
  static propTypes = {
    loginRequest: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    }),
  };
  /**
   * enviar o formulario de login
   */
  handleSubmit = async () => {
    const { email, password } = this.state;
    const { loginRequest } = this.props;
    this.setState({ email: '', password: '' });
    loginRequest({ email, password });
  };
  /**
   * verifica se o usuário está logado
   */
  checkLogin = async () => {
    try {
      const { user } = this.props;
      const userLogged = await AsyncStorage.getItem('@PatientApp:user');
      if (!userLogged) {
        if (user) {
          await AsyncStorage.setItem('@PatientApp:user', JSON.stringify(user));
        }
      } else {
        navigate('Patients');
      }
    } catch (e) {
      console.tron.log(e);
    }
  };
  componentWillMount() {
    this.checkLogin();
  }
  componentDidUpdate() {
    this.checkLogin();
  }
  /**
   * Renderiza a pagina de login
   */
  render() {
    const { email, password } = this.state;
    const { error, loading } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={{ width: 300, height: 100 }} source={Logo} />
        </View>
        <View style={styles.form}>
          {error && (
            <Text style={styles.error}>
              Usário e/ou senha não correspondente
            </Text>
          )}
          <Text style={styles.inputText}>Informe seu e-mail</Text>
          <TextInput
            value={email}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite seu e-mail"
            onChangeText={text => this.setState({ email: text })}
            underlineColorAndroid="transparent"
          />
          <Text style={styles.inputText}>Informe sua senha secreta</Text>
          <TextInput
            value={password}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Digite sua senha"
            onChangeText={text => this.setState({ password: text })}
            underlineColorAndroid="transparent"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Prosseguir</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
/**
 * Conetando o componente a Store
 */
const mapStateToProps = state => ({
  error: state.login.error,
  loading: state.login.loading,
  user: state.login.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
