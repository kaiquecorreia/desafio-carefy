import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';

class PatientsList extends Component {
  state = {
    loading: true,
  };
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    ),
  };
  componentDidMount() {
    this.getUserLogged();
  }
  getUserLogged = async () => {
    let userLogged = await AsyncStorage.getItem('@PatientApp:user');
    userLogged = JSON.parse(userLogged);
  };
  renderPatientList = () => {};

  render() {
    const { loading } = this.state;

    return (
      <View>
        <Header title="Lista de Pacientes" />
      </View>
    );
  }
}
const mapStateToProps = state => ({
  user: state.login.user,
});

export default connect(mapStateToProps)(PatientsList);
