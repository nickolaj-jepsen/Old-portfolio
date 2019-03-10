import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 5,
  },
  date: {
    fontSize: 10,
    fontFamily: 'Lato Italic',
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
  headerMuted: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Lato',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 7,
    textTransform: 'uppercase',
  },
});

const EducationEntry = ({ name, education, date, graduated, i18n }) => {
  const header = ` ${education} | ${name}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.header}>
            {header}
            {!graduated && (
              <Text style={styles.headerMuted}>
                {` | ${i18n.not_graduated}`}
              </Text>
            )}
          </Text>
        </View>
        <View style={styles.rightColumn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const Education = ({ data }) => (
  <>
    <Text style={styles.title}>{data.i18n.education}</Text>
    {data.education.map(({ name, education, date, graduated }) => (
      <EducationEntry
        name={name}
        key={name + education}
        date={`${date.from} - ${date.to}`}
        education={education}
        graduated={graduated}
        i18n={data.i18n}
      />
    ))}
  </>
);

EducationEntry.propTypes = {
  name: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  graduated: PropTypes.bool.isRequired,
  i18n: PropTypes.objectOf(PropTypes.string).isRequired,
};

Education.propTypes = {
  data: DataType.isRequired,
};

export default Education;
