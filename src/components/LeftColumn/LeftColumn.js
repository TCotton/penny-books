/**
 * Created by andywalpole on 19/12/2015.
 */
import React, { Component, PropTypes } from 'react';
import s from './LeftColumn';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class LeftColumn extends Component {

  render() {
    return (
      <div className={s.left + '-column'}>
        <img src={require('./backround-icon.svg')} className={s.left + '-column--icon'}/>
      </div>
    );
  }

}

export default LeftColumn;
