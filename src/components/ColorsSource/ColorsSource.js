import React, { Component } from 'react';
import tinycolor from 'tinycolor2';

import './style.scss';

export default class ColorsSource extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isBgDark: false
    };
  }

  changeBg() {
    this.setState({ ...this.state, isBgDark: !this.state.isBgDark });
  }

  renderButtons() {
    const removeAllBtn = this.props.colors.some((i) => i !== null) ?
      <button onClick={this.props.removeAll}>Remove all</button> : '';
    const changeBgBtn = (<button onClick={::this.changeBg}>
      {this.state.isBgDark ? 'Light' : 'Dark'} background
    </button>);

    return (
      <div className="buttons">
        {changeBgBtn}
        {removeAllBtn}
      </div>
    );
  }

  renderItems() {
    const generateColors = (currentColor) => {
      const color = tinycolor(currentColor);
      const method = color.isDark() ? 'lighten' : 'darken';
      return this.props.colors.map((o, index) =>
        tinycolor(currentColor)[method](color.isDark() ? 50 - 50 / 10 * index : 50 / 10 * index).toString()
      );
    }

    const colorSet = generateColors(this.props.color);
    const items = colorSet.map((item, index) => (
      <li
        key={index}
        className={`color-circle ${this.props.colors.indexOf(item) < 0 ? 'addable' : 'added'}`}
        style={{ background: item, color: tinycolor(item).spin(90).toString() }}
        onClick={
          this.props.colors.indexOf(item) < 0 ? () => {
            this.props.addColor(item);
          } : () => false
        }
      ></li>
    ));

    return <ul className="color-list">{items}</ul>;
  }

  render() {
    const containerClasses = `selected-colors container ${this.state.isBgDark ? '_dark' : '_light'}`;
    //const textColor = { color: tinycolor(this.props.mainColor).isDark ? '#fff' : '#000' };

    return (
      <div className={containerClasses}>
        <h2>{this.props.title}</h2>
        {this.renderItems()}
        {this.renderButtons()}
      </div>
    );
  }
}

ColorsSource.propTypes = {
  addColor: React.PropTypes.func,
  removeAll: React.PropTypes.func,
  color: React.PropTypes.string,
  colors: React.PropTypes.array
};
