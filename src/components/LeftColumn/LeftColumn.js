/**
 * Created by andywalpole on 19/12/2015.
 */
import React, { Component } from 'react';
import s from './LeftColumn.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class LeftColumn extends Component {

  render() {
    return (
      <div className={s.leftColumn}>
        <img src={require('./backround-icon.svg')} className={s.leftColumnIcon}/>
      </div>
    );
  }

}

export default LeftColumn;
