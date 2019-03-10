import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Title from './Title';
import DataType from './DataType';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  about: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

const About = ({ data }) => (
  <View style={styles.container}>
    <Title>{data.i18n.about}</Title>
    <Text style={styles.about}>{data.personal.about}</Text>
  </View>
);

About.propTypes = {
  data: DataType.isRequired,
};

export default About;
