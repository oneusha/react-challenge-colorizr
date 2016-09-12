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

  static propTypes = {
    addColor: React.PropTypes.func,
    removeAll: React.PropTypes.func,
    color: React.PropTypes.string,
    colors: React.PropTypes.array
  };

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
        tinycolor(currentColor)[method]((color.isDark() ? 50 : 0) - 50 / 10 * index).toString()
      );
    };

    const colorSet = generateColors(this.props.color);
    const items = colorSet.map((item, index) => (
      <li
        key={index}
        className={`color-circle ${this.props.colors.indexOf(item) < 0 ? 'addable' : 'added'}`}
        style={{ background: item, color: tinycolor(item).isDark() ? '#fff' : '#000'}}
        onClick={() => {
            this.props.colors.indexOf(item) < 0 ?
              this.props.addColor(item) :
              this.props.removeColor(item);
          }
        }
      ></li>
    ));

    return <ul className="color-list">{items}</ul>;
  }

  render() {
    const containerClasses = `selected-colors container ${this.state.isBgDark ? '_dark' : '_light'}`;

    return (
      <div className={containerClasses}>
        <h2>{this.props.title}</h2>
        {this.renderItems()}
        {this.renderButtons()}
      </div>
    );
  }
}
