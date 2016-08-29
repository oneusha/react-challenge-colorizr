import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CreateActions from '../../actions/CreateActions';
import SelectedColors from '../../components/SelectedColors/SelectedColors';
import ColorsSource from '../../components/ColorsSource/ColorsSource';

import './create.scss';

class Create extends Component {
  constructor(props) {
    super(props);

    this.changeColor = this.changeColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.addColor = this.addColor.bind(this);
  }

  changeColor(e) {
    const color = e.target.value;

    this.props.actions.changeMainColor(color);
  }

  removeColor(e) {
    const index = [].indexOf.call(e.target.parentElement.children, e.target);
    const colors = [...this.props.colors];

    colors[index] = null;
    this.props.actions.changeColorCollection(colors);
  }

  addColor(e) {
    const index = this.props.colors.indexOf(null);
    const color = e.target.style.background;
    const colors = [...this.props.colors];

    if (index >= 0) {
      colors[index] = color;
    } else {
      colors.shift();
      colors.push(color);
    }

    this.props.actions.changeColorCollection(colors);
  }

  render() {
    return (
      <div className="main create" style={{ background: this.props.color }}>
        <h1><label htmlFor="mainColor" className="color-button">
          Choose your color
        </label></h1>
        <input
          type="color"
          name="mainColor"
          className="color-input"
          id="mainColor" onChange={this.changeColor}
        />
        <SelectedColors
          colors={this.props.colors}
          removeColor={this.removeColor}
        />
        <ColorsSource
          color={this.props.color}
          addColor={this.addColor}
          colors={this.props.colors}
        />
        <ColorsSource
          color={this.props.color}
          addColor={this.addColor}
          colors={this.props.colors}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    color: state.create.color,
    colors: state.create.colors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CreateActions, dispatch)
  };
}

Create.propTypes = {
  actions: React.PropTypes.object,
  colors: React.PropTypes.array,
  color: React.PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
