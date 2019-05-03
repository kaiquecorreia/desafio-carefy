import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PatientsListCreators } from '../../store/ducks/patientList';

import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import PatientItem from './PatientItem';
import { navigate } from '../../services/navigation';
import styles from './styles';

class PatientsList extends Component {
  /**
   * Aplica estilos e icones ao menu do app
   */
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };
  /**
   * Validação de props via propTypes
   */
  static propTypes = {
    patientListReadRequest: PropTypes.func.isRequired,
    patientList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        hospital: PropTypes.string,
        email: PropTypes.string,
        enabled: PropTypes.bool,
        user: PropTypes.string,
      }),
    ),
    loading: PropTypes.bool,
  };

  /**
   * Estado de patientList
   */
  state = {
    username: '',
  };
  componentDidMount() {
    this.getPatientList();
  }
  /**
   * Verifica se o usuário está logado
   * Caso não esteja retorna para tela de login
   */
  checkUserLogged = async () => {
    let userLogged = await AsyncStorage.getItem('@PatientApp:user');
    if (userLogged) {
      userLogged = await JSON.parse(userLogged);
      return userLogged;
    }
    navigate('Login');
    return false;
  };
  /**
   * Busca os pacientes filtrado pelo usuário logado
   */
  getPatientList = async () => {
    const { patientListReadRequest } = this.props;
    const user = await this.checkUserLogged();
    this.setState({ username: user.name });
    patientListReadRequest(user.id);
  };
  /**
   * Funçãp passada para renderizar a lista de pacientes
   */
  renderListItem = ({ item }) => <PatientItem patient={item} />;
  /**
   * Retorna o componente de lista de pacientes
   */
  renderPatientList = () => {
    const { patientsList } = this.props;

    return patientsList.length > 0 ? (
      <FlatList
        data={patientsList}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.listContainer}
      />
    ) : (
      <View style={styles.listing}>
        <Text style={styles.listingTitle}>Nenhum paciente cadastrado.</Text>
        <Icon style={styles.listingIcon} name="check" size={30} />
      </View>
    );
  };

  render() {
    const { loading } = this.props;
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <Header title={`Olá , ${username}!`} />
        <View style={styles.listing}>
          <Text style={styles.listingTitle}>Listagem de pacientes</Text>
        </View>
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderPatientList()
        )}
      </View>
    );
  }
}
/**
 * Conetando o componente a Store
 */
const mapStateToProps = state => ({
  patientsList: state.patientList.patientsList,
  loading: state.patientList.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PatientsListCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientsList);
