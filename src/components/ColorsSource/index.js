import React, { Component } from 'react';
import tinycolor from 'tinycolor2';
import invertColor from '../../utils/invertColor';

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
    removeAllColors: React.PropTypes.func,
    addAllColors: React.PropTypes.func,
    mainColor: React.PropTypes.string,
    collection: React.PropTypes.array
  };

  changeBg() {
    this.setState({ ...this.state, isBgDark: !this.state.isBgDark });
  }

  renderButtons() {
    const removeAllBtn = this.props.collection.some(i => i !== null) ?
      <button onClick={this.props.removeAllColors}>Remove all</button> : '';
    const addAllBtn = this.props.collection.some(i => i === null) ?
      <button onClick={() => this.props.addAllColors()}>Add all</button> : '';
    const changeBgBtn = (<button onClick={::this.changeBg}>
      {this.state.isBgDark ? 'Light' : 'Dark'} background
    </button>);

    return (
      <div className="buttons">
        {changeBgBtn}
        {removeAllBtn}
        {addAllBtn}
      </div>
    );
  }

  renderItems() {
    const generateColors = (currentColor) => {
      const color = tinycolor(currentColor);
      const method = color.isDark() ? 'lighten' : 'darken';
      return this.props.collection.map((o, index) =>
        tinycolor(currentColor)[method]((color.isDark() ? 50 : 0) - 50 / 10 * index).toString()
      );
    };

    const colorSet = generateColors(this.props.mainColor);
    const items = colorSet.map((item, index) => (
      <li
        key={index}
        className={`color-circle ${this.props.collection.indexOf(item) < 0 ? 'addable' : 'added removable'}`}
        style={{ background: item, color: invertColor(item) }}
        onClick={() => {
            this.props.collection.indexOf(item) < 0 ?
              this.props.addColor(item) :
              this.props.removeColor(item);
          }
        }
      />
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
