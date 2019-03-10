import * as PropTypes from 'prop-types';

export default PropTypes.shape({
  meta: {
    slug: PropTypes.string,
  },
  personal: {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  },
  education: {
    name: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    graduated: PropTypes.string.isRequired,
    date: {
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    },
  },
  experience: {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    highlights: PropTypes.string.isRequired,
    date: {
      from: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    },
  },
  projects: {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    highlights: PropTypes.string.isRequired,
  },
  references: {
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  },
  skills: {
    programming_languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    frameworks: PropTypes.arrayOf(PropTypes.string).isRequired,
    tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  },
  i18n: {
    personal: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    skills: PropTypes.string.isRequired,
    frameworks: PropTypes.string.isRequired,
    tools: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired,
    programming_languages: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    not_graduated: PropTypes.string.isRequired,
  },
});
