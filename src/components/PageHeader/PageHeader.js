import React from 'react';
import PropTypes from 'prop-types';

export default class PageHeader extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    title: PropTypes.string,
  };

  render() {
    const { label, title } = this.props;
    let labelContent = label !== title ? <h4 className="page-header__label">{label}</h4> : <div className="page-header__label" />;

    return (
      <div className="page-header">
        {labelContent}
        <h1 id="page-title" className="page-header__title">
          {title}
        </h1>
      </div>
    );
  }
}
