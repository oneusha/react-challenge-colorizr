import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collection';
import * as mainColorActions from '../../actions/mainColor';

import ColorChooser from '../../components/ColorChooser';
import SelectedColors from '../../components/SelectedColors';
import ColorsSource from '../../components/ColorsSource';

import 'react-color-picker/index.css';

import './style.scss';

class Create extends Component {
  static propTypes = {
    collectionActions: React.PropTypes.object,
    mainColorActions: React.PropTypes.object,
    collection: React.PropTypes.array,
    mainColor: React.PropTypes.string
  };

  render() {
    return (
      <div className="main create" style={{ background: this.props.mainColor }}>
        <ColorChooser
          title="Choose your color"
          color={this.props.mainColor}
          changeMainColor={this.props.mainColorActions.changeMainColor}
        />
        <SelectedColors
          collection={this.props.collection}
          removeColor={this.props.collectionActions.removeColor}
        />
        <ColorsSource
          title="Darker and Lighter"
          mainColor={this.props.mainColor}
          addColor={this.props.collectionActions.addColor}
          removeColor={this.props.collectionActions.removeColor}
          removeAllColors={this.props.collectionActions.removeAllColors}
          addAllColors={this.props.collectionActions.addAllColors}
          collection={this.props.collection}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mainColor: state.mainColor.mainColor,
  collection: state.collection.collection
});

const mapDispatchToProps = dispatch => ({
  collectionActions: bindActionCreators(collectionActions, dispatch),
  mainColorActions: bindActionCreators(mainColorActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
