import { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../Section/Section.module.css';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <section>
        <h1 className={css.title}>{title}</h1>
        {children}
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
