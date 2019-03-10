import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  itemSlim: {
    flexDirection: 'row',
    marginBottom: 1,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  itemContent: {
    flex: 1,
    fontSize: 10,
    fontFamily: 'Lato',
  },
});

const List = ({ children }) => children;

export const Item = ({ children, slim }) => (
  <View style={slim ? styles.itemSlim : styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Text style={styles.itemContent}>{children}</Text>
  </View>
);

List.propTypes = {
  children: PropTypes.node,
};

Item.propTypes = {
  slim: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Item.defaultProps = {
  slim: false,
};

export default List;
