import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PatientsListCreators } from '../../../store/ducks/patientList';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

class PatientItem extends Component {
  static propTypes = {
    patient: PropTypes.shape({
      name: PropTypes.string,
      hospital: PropTypes.string,
      enable: PropTypes.number,
      user: PropTypes.string,
    }).isRequired,
    patientListDeleteRequest: PropTypes.func.isRequired,
  };
  deletePatient = async () => {
    const { id } = this.props.patient;
    const { patientListDeleteRequest } = this.props;
    patientListDeleteRequest(id);
  };
  render() {
    const { patient } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nome: {patient.name}</Text>
        <View style={styles.info}>
          <Icon name="building" size={20} style={styles.infoIcon} />
          <Text style={styles.infoText}>Hospital: {patient.hospital}</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="user" size={20} style={styles.infoIcon} />
            <Text style={styles.infoText}>Cadastrado por: {patient.user}</Text>
          </View>
          <View style={styles.info}>
            <Icon
              name={patient.enabled ? 'unlock' : 'lock'}
              size={20}
              style={styles.infoIcon}
            />
            <TouchableOpacity
              style={styles.buttonExcluded}
              onPress={this.deletePatient}
            >
              <Icon name="trash" size={20} style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  patientsList: state.patientList.patientsList,
  loading: state.patientList.loadingDelete,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PatientsListCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientItem);
