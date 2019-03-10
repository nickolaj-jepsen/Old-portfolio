import React from 'react';
import * as PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import DataType from './DataType';

const styles = StyleSheet.create({
  header: {
    fontFamily: 'Lato Bold',
    fontSize: 14,
    marginBottom: 0,
    textTransform: 'uppercase',
  },
  title: {
    fontFamily: 'Lato Bold',
    fontSize: 11,
    marginTop: 10,
    marginBottom: 3,
  },
  skills: {
    fontFamily: 'Lato',
    fontSize: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.skills}>{skills.join(', ')}</Text>
  </View>
);

SkillEntry.propTypes = {
  name: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const Skills = ({ data }) => {
  const skills = Object.entries(data.skills).map(([key, value]) => (
    <SkillEntry key={key} name={data.i18n[key]} skills={value} />
  ));

  return (
    <View>
      <Text style={styles.header}>{data.i18n.skills}</Text>
      {skills}
    </View>
  );
};

Skills.propTypes = {
  data: DataType.isRequired,
};

export default Skills;
