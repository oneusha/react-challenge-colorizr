import React, { Component } from 'react';
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
    collection: React.PropTypes.array,
    sources: React.PropTypes.array
  };

  changeBg() {
    this.setState({ ...this.state, isBgDark: !this.state.isBgDark });
  }

  renderButtons() {
    const removeAllBtn =
      <button
        className="btn btn_red"
        onClick={this.props.removeAllColors}
        disabled={!this.props.collection.some(i => i !== null)}
      >
        Remove all
      </button>;
    const addAllBtn =
      <button
        className="btn btn_green"
        onClick={() => this.props.addAllColors(this.props.sources)}
      >
        Add all
      </button>;
    const changeBgBtn =
      <button className="btn" onClick={::this.changeBg}>
        {this.state.isBgDark ? 'Light' : 'Dark'} background
      </button>;

    return (
      <div className="buttons">
        {changeBgBtn}
        {removeAllBtn}
        {addAllBtn}
      </div>
    );
  }

  renderItems() {
    const items = this.props.sources.map((item, index) => (
      <li
        key={index}
        className={`color-circle ${this.props.collection.indexOf(item) < 0 ? 'addable' : 'added removable'}`}
        style={{ background: item, color: invertColor(item) }}
        title={item}
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
