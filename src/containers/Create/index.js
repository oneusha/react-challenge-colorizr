import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as collectionActions from '../../actions/collection';
import * as mainColorActions from '../../actions/mainColor';
import * as sourcesActions from '../../actions/sources';

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
    sources: React.PropTypes.array,
    mainColor: React.PropTypes.string
  };

  render() {
    const props = this.props;
    return (
      <div className="main create" style={{ background: props.mainColor }}>
        <ColorChooser
          title="Choose your color"
          color={props.mainColor}
          changeMainColor={ (color) => { props.sourcesActions.changeColor(color); props.mainColorActions.changeMainColor(color)} }
        />
        <SelectedColors
          collection={props.collection}
          removeColor={props.collectionActions.removeColor}
        />
        <ColorsSource
          title="Darker and Lighter"
          mainColor={props.mainColor}
          addColor={props.collectionActions.addColor}
          removeColor={props.collectionActions.removeColor}
          removeAllColors={props.collectionActions.removeAllColors}
          addAllColors={props.collectionActions.addAllColors}
          collection={props.collection}
          sources={props.sources}
        />
        <ColorsSource
          title="Mixed with"
          mainColor={props.mainColor}
          addColor={props.collectionActions.addColor}
          removeColor={props.collectionActions.removeColor}
          removeAllColors={props.collectionActions.removeAllColors}
          addAllColors={props.collectionActions.addAllColors}
          collection={props.collection}
          sources={props.sources}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mainColor: state.mainColor.mainColor,
  collection: state.collection.collection,
  sources: state.sources.sources
});

const mapDispatchToProps = dispatch => ({
  collectionActions: bindActionCreators(collectionActions, dispatch),
  mainColorActions: bindActionCreators(mainColorActions, dispatch),
  sourcesActions: bindActionCreators(sourcesActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
