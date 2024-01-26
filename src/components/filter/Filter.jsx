import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../Contactbook.module.css';

class Filter extends Component {
  render() {
    return (
      <label className={styles.contacts}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
