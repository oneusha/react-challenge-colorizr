import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CreateActions from '../../actions/CreateActions';

import SelectedColors from '../../components/SelectedColors/SelectedColors';
import ColorsSource from '../../components/ColorsSource/ColorsSource';

import ColorPicker from 'react-color-picker';
import 'react-color-picker/index.css';

import './create.scss';

class Create extends Component {
  changeColor(color) {
    this.props.actions.changeMainColor(color);
  }

  removeColor(e) {
    const index = [].indexOf.call(e.target.parentElement.children, e.target);
    const colors = [...this.props.colors];

    colors[index] = null;
    this.props.actions.changeColorCollection(colors);
  }

  removeAll() {
    this.props.actions.changeColorCollection(Array(10).fill(null));
  }

  addColor(color) {
    const index = this.props.colors.indexOf(null);
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
        <h1>Choose your color</h1>
        <ColorPicker
          defaultValue={this.props.color}
          onDrag={this.props.actions.changeMainColor}
        />
        <SelectedColors
          colors={this.props.colors}
          removeColor={::this.removeColor}
        />
        <ColorsSource
          title="Darker and Lighter"
          color={this.props.color}
          addColor={::this.addColor}
          removeAll={::this.removeAll}
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
