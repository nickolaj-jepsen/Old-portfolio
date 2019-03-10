import React from 'react';
import { Link, Text, View, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingTop: 5,
    borderTopWidth: 2,
    borderTopColor: '#112131',
    borderTopStyle: 'solid',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },

  element: {
    fontSize: 10,
    fontFamily: 'Lato',
    color: 'black',
    textDecoration: 'none',
  },

  iconBrand: {
    fontSize: 10,
    fontFamily: 'FA brand',
  },

  icon: {
    fontSize: 10,
    fontFamily: 'FA solid',
  },
});

const Footer = ({ data }) => (
  <View style={styles.footer}>
    <View>
      <Link href={`tel:${data.personal.phone}`} style={styles.element}>
        <Text style={styles.icon}> </Text>
        {data.personal.phone}
      </Link>
    </View>
    <View>
      <Link href={`http://${data.personal.homepage}`} style={styles.element}>
        <Text style={styles.icon}> </Text>
        https://
        {data.personal.homepage}
      </Link>
    </View>
    <View>
      <Link
        href={`https://github.com/${data.personal.github}`}
        style={styles.element}
      >
        <Text style={styles.iconBrand}> /</Text>
        {data.personal.github}
      </Link>
    </View>
    <View>
      <Link
        href={`https://linkedin.com/in/${data.personal.linkedin}`}
        style={styles.element}
      >
        <Text style={styles.iconBrand}> /</Text>
        {data.personal.linkedin}
      </Link>
    </View>
  </View>
);

Footer.propTypes = {
  data: DataType.isRequired,
};

export default Footer;
