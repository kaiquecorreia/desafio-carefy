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

  componentDidMount() {
    this.getPatientList();
  }

  checkUserLogged = async () => {
    let userLogged = await AsyncStorage.getItem('@PatientApp:user');
    if (userLogged) {
      userLogged = await JSON.parse(userLogged);
      return userLogged.id;
    }
    navigate('Login');
    return false;
  };

  getPatientList = async () => {
    const { patientListReadRequest } = this.props;
    const userId = await this.checkUserLogged();
    patientListReadRequest(userId);
  };
  renderListItem = ({ item }) => <PatientItem patient={item} />;
  renderPatientList = () => {
    const { patientsList } = this.props;
    return (
      <FlatList
        data={patientsList}
        keyExtractor={item => item.id}
        renderItem={this.renderListItem}
      />
    );
  };

  render() {
    const { loading } = this.props;

    return (
      <View style={styles.container}>
        <Header title="Lista de Pacientes" />
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
