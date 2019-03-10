import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List, { Item } from './List';
import DataType from './DataType';

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 5,
  },
  date: {
    fontSize: 10,
    fontFamily: 'Lato Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  header: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato Bold',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 7,
    textTransform: 'uppercase',
  },
});

const ExperienceEntry = ({ company, details, position, date }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.header}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
      <List>
        {details.map(detail => (
          <Item key={details} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Experience = ({ data }) => (
  <>
    <Text style={styles.title}>{data.i18n.experience}</Text>
    {data.experience.map(({ name, date, highlights, role }) => (
      <ExperienceEntry
        company={name}
        date={`${date.from} - ${date.to}`}
        details={highlights}
        key={name + role}
        position={role}
      />
    ))}
  </>
);

ExperienceEntry.propTypes = {
  company: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
};

Experience.propTypes = {
  data: DataType.isRequired,
};

export default Experience;
