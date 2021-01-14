import React from 'react';
import PropTypes from 'prop-types';

export class Good extends React.Component {
  state = {
    isSelected: false,
  };

  clickHandlerAdd = () => {
    this.setState(prevState => ({ isSelected: !prevState.isSelected }));
    this.props.setGood(this.props.word);
  };

  clickHandlerRemove = () => {
    const value = this.props.selectedGood.filter(
      good => good !== this.props.word,
    );

    this.props.removeSelection(value);
  }

  render() {
    return (
      <>
        <li className={this.props.selectedGood.includes(this.props.word)
          ? 'selected' : null}
        >
          {this.props.word}
        </li>
        <button
          type="button"
          onClick={this.clickHandlerAdd}
        >
          Add
        </button>
        {' '}
        <button
          type="button"
          onClick={this.clickHandlerRemove}
        >
          Remove
        </button>
      </>
    );
  }
}

Good.propTypes = {
  setGood: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  selectedGood: PropTypes.arrayOf(PropTypes.string).isRequired,
  removeSelection: PropTypes.func.isRequired,
};
