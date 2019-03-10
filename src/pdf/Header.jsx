import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontFamily: 'Lato Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    textTransform: 'uppercase',
    fontFamily: 'Lato',
  },
  link: {
    fontFamily: 'Lato',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});

const Header = ({ data }) => (
  <View style={styles.container}>
    <View style={styles.detailColumn}>
      <Text style={styles.name}>{data.personal.name}</Text>
      <Text style={styles.subtitle}>{data.personal.role}</Text>
    </View>
    <View style={styles.linkColumn}>
      <Link href={`mailto:${data.personal.email}`} style={styles.link}>
        {data.personal.email}
      </Link>
    </View>
  </View>
);

Header.propTypes = {
  data: DataType.isRequired,
};

export default Header;
