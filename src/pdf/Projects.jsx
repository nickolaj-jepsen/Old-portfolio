import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import List, { Item } from './List';
import DataType from './DataType';

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 5,
  },
  side: {
    fontSize: 11,
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
    marginTop: 5,
    marginBottom: 7,
    textTransform: 'uppercase',
  },
  iconBrand: {
    fontSize: 10,
    fontFamily: 'FA brand',
  },
});

const ProjectEntry = ({ company, details, position, client, link }) => {
  const title = `${company} | ${position}`;
  return (
    <View style={styles.entryContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
          <Text style={styles.header}>{title}</Text>
        </View>
        <View style={styles.rightColumn}>
          {client && <Text style={styles.side}>{client}</Text>}
          {link && (
            <Text style={styles.side}>
              <Text style={styles.iconBrand}></Text>
              {link}
            </Text>
          )}
        </View>
      </View>
      <List>
        {details.map(detail => (
          <Item key={detail} style={styles.detailContainer}>
            {detail}
          </Item>
        ))}
      </List>
    </View>
  );
};

const Projects = ({ data }) => (
  <>
    <Text style={styles.title}>{data.i18n.project}</Text>
    {data.projects.map(({ name, client, link, highlights, role }) => (
      <ProjectEntry
        company={name}
        client={client}
        link={link}
        details={highlights}
        key={name + role}
        position={role}
      />
    ))}
  </>
);

ProjectEntry.propTypes = {
  company: PropTypes.string.isRequired,
  client: PropTypes.string,
  link: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  position: PropTypes.string.isRequired,
};

ProjectEntry.defaultProps = {
  client: null,
  link: null,
};

Projects.propTypes = {
  data: DataType.isRequired,
};

export default Projects;
