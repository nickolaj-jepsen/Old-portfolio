/* global window */
import React from 'react';
import { withPrefix } from 'gatsby';
import {
  Document,
  Font,
  Page,
  StyleSheet,
  Image,
  View,
} from '@react-pdf/renderer';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';
import Projects from './Projects';
import References from './References';
import Education from './Education';
import DataType from './DataType';

const root =
  typeof window !== `undefined`
    ? `${window.location.protocol}//${window.location.host}`
    : '';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  container: {
    marginTop: -20,
    flexGrow: 10,
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  image: {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  rightColumn: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
});

Font.register(root + withPrefix(`/fonts/Open_Sans/OpenSans-Regular.ttf`), {
  family: 'Open Sans',
});
Font.register(root + withPrefix(`/fonts/Lato/Lato-Regular.ttf`), {
  family: 'Lato',
});
Font.register(root + withPrefix(`/fonts/Lato/Lato-Italic.ttf`), {
  family: 'Lato Italic',
});
Font.register(root + withPrefix(`/fonts/Lato/Lato-Bold.ttf`), {
  family: 'Lato Bold',
});
Font.register(root + withPrefix(`/fonts/FA/fa-brands-400.ttf`), {
  family: 'FA brand',
});
Font.register(root + withPrefix(`/fonts/FA/fa-solid-900.ttf`), {
  family: 'FA solid',
});

const Resume = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      <Header data={data} />
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image
            src={root + withPrefix(`/img/profile_picture.jpg`)}
            style={styles.image}
          />
          <About data={data} />
          <Skills data={data} />
          <References data={data} />
        </View>
        <View style={styles.rightColumn}>
          <Education data={data} />
          <Experience data={data} />
          <Projects data={data} />
        </View>
      </View>
      <Footer data={data} />
    </Page>
  </Document>
);

Resume.propTypes = {
  data: DataType.isRequired,
};

export default Resume;
