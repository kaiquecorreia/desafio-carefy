import React, { Component } from 'react';
import { View, FlatList, Text, ActivityIndicator } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PatientsListCreators } from '../../store/ducks/patientList';

import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import PatientItem from './PatientItem';
import { navigate } from '../../services/navigation';
import styles from './styles';
class PatientsList extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };
  state = {
    username: '',
  };
  componentDidMount() {
    this.getPatientList();
  }

  checkUserLogged = async () => {
    let userLogged = await AsyncStorage.getItem('@PatientApp:user');
    if (userLogged) {
      userLogged = await JSON.parse(userLogged);
      return userLogged;
    }
    navigate('Login');
    return false;
  };

  getPatientList = async () => {
    const { patientListReadRequest } = this.props;
    const user = await this.checkUserLogged();
    this.setState({ username: user.name });
    patientListReadRequest(user.id);
  };
  renderListItem = ({ item }) => <PatientItem patient={item} />;
  renderPatientList = () => {
    const { patientsList } = this.props;
    return (
      <FlatList
        data={patientsList}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        style={styles.listContainer}
      />
    );
  };

  render() {
    const { loading } = this.props;
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <Header title={`Olá ! Seja bem vindo, ${username}`} />
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
