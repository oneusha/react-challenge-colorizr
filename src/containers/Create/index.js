import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CreateActions from '../../actions/CreateActions';

import ColorChooser from '../../components/ColorChooser/index';
import SelectedColors from '../../components/SelectedColors/index';
import ColorsSource from '../../components/ColorsSource/index';

import 'react-color-picker/index.css';

import './style.scss';

class Create extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    colors: React.PropTypes.array,
    color: React.PropTypes.string
  };

  changeColor(color) {
    this.props.actions.changeMainColor(color);
  }

  removeColor(color) {
    const colors = [...this.props.colors];

    colors[colors.indexOf(color)] = null;
    this.props.actions.changeColorCollection(colors);
  }

  removeAll() {
    this.props.actions.changeColorCollection(new Array(10).fill(null));
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
        <ColorChooser
          title="Choose your color"
          color={this.props.color}
          changeMainColor={this.props.actions.changeMainColor}
        />
        <SelectedColors
          colors={this.props.colors}
          removeColor={::this.removeColor}
        />
        <ColorsSource
          title="Darker and Lighter"
          color={this.props.color}
          addColor={::this.addColor}
          removeColor={::this.removeColor}
          removeAll={::this.removeAll}
          colors={this.props.colors}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  color: state.create.color,
  colors: state.create.colors
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(CreateActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
