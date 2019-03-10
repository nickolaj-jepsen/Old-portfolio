import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});

const Title = ({ children }) => <Text style={styles.title}>{children}</Text>;

Title.propTypes = {
  children: DataType.isRequired,
};

export default Title;
