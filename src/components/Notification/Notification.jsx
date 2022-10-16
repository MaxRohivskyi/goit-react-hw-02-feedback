import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <p className={css.text}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
