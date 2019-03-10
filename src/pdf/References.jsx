import React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  name: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginTop: 10,
    marginBottom: 3,
  },
  company: {
    fontFamily: 'Lato',
    marginBottom: 3,
    fontSize: 10,
  },
  email: {
    fontFamily: 'Lato',
    marginBottom: 3,
    fontSize: 10,
  },
  phone: {
    fontFamily: 'Lato',
    marginBottom: 3,
    fontSize: 10,
  },

  icon: {
    fontSize: 10,
    fontFamily: 'FA solid',
  },
});

const ReferenceEntry = ({ name, role, company, email, phone }) => (
  <View>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.company}>{`${company} | ${role}`}</Text>
    {email && (
      <Text style={styles.company}>
        <Text style={styles.icon}> </Text>
        {email}
      </Text>
    )}
    {phone && (
      <Text style={styles.phone}>
        <Text style={styles.icon}> </Text>
        {phone}
      </Text>
    )}
  </View>
);

ReferenceEntry.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
};

ReferenceEntry.defaultProps = {
  email: null,
  phone: null,
};

const References = ({ data }) => {
  const references = data.references.map(value => (
    <ReferenceEntry
      key={value.name}
      name={value.name}
      role={value.role}
      company={value.company}
      email={value.email}
      phone={value.phone}
    />
  ));

  return (
    <View>
      <Text style={styles.header}>{data.i18n.reference}</Text>
      {references}
    </View>
  );
};

References.propTypes = {
  data: DataType.isRequired,
};

export default References;
