import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CreateActions from '../../actions/CreateActions';
import SelectedColors, { DEFAULT_COLOR } from '../../components/SelectedColors/SelectedColors';
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
  	let color = e.target.value;

  	this.props.actions.changeColor(color);
  }

  removeColor(e) {
    let index = [].indexOf.call(e.target.parentElement.children, e.target);
    let colors = [...this.props.colors];

    colors[index] = null;
    this.props.actions.removeColor(colors);
  }

  addColor(e) {
    let index = this.props.colors.indexOf(null);
    let color = e.target.style.background;
    let colors = [...this.props.colors];

    if (index >= 0) {
      colors[index] = color;
    } else {
      colors.shift();
      colors.push(color);
    }
    
    this.props.actions.addColor(colors);
  }

  render() {
    return (
      <div className="main create" style={{ background: this.props.color }}>
      	<h1><label htmlFor="mainColor" className="color-button">Choose your color</label></h1>
		    <input type="color" name="mainColor" className="color-input" id="mainColor" onChange={this.changeColor} />
        <SelectedColors colors={this.props.colors} removeColor={this.removeColor} />
        <ColorsSource color={this.props.color} addColor={this.addColor} colors={this.props.colors} />
        <ColorsSource color={this.props.color} addColor={this.addColor} colors={this.props.colors} />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);