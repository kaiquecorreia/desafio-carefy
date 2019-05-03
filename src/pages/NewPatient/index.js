import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Creators as PatientActions } from '../../store/ducks/patient';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from '../../components/Header';
import styles from './styles';

class NewPatient extends Component {
  state = {
    patient: { name: '', hospital: '', user_id: null, enabled: 1 },
  };
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="user-plus" size={20} color={tintColor} />
    ),
  };

  handleSubmit = async () => {
    const { patientCreateRequest, patientCreateFailure } = this.props;
    const { patient } = this.state;
    if (this.inputValidate()) {
      let user = await AsyncStorage.getItem('@PatientApp:user');
      user = JSON.parse(user);
      this.setState(Object.assign(this.state.patient, { user_id: user.id }));
      patientCreateRequest(patient);
    } else {
      patientCreateFailure();
    }
  };
  inputValidate = () => {
    const {
      patient: { name, hospital },
    } = this.state;
    if (!name) return false;
    if (!hospital) return false;
    return true;
  };
  render() {
    const {
      patient: { name, hospital },
    } = this.state;
    const { error, loading } = this.props;
    return (
      <Fragment>
        <Header title="Novo paciente" />
        <View style={styles.container}>
          <View style={styles.form}>
            <Icon style={styles.icon} name="user-plus" size={28} />
            <Text style={styles.title}>Cadastrar novo paciente</Text>
            {error && (
              <Text style={styles.error}>
                Oops! Preencha todos os campos. :)
              </Text>
            )}
            <Text style={styles.inputText}>Informe o nome: </Text>
            <TextInput
              value={name}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nome do paciente"
              onChangeText={text =>
                this.setState(prevState => ({
                  patient: {
                    ...prevState.patient,
                    name: text,
                  },
                }))
              }
              underlineColorAndroid="transparent"
            />
            <Text style={styles.inputText}>Informe o hospital:</Text>
            <TextInput
              value={hospital}
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Hospital do paciente"
              onChangeText={text =>
                this.setState(prevState => ({
                  patient: {
                    ...prevState.patient,
                    hospital: text,
                  },
                }))
              }
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.patient.error,
  loading: state.patient.loading,
  patient: state.login.patient,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PatientActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPatient);
