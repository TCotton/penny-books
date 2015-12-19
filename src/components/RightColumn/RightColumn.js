import React, { Component } from 'react';
import s from './RightColumn.scss';
import withStyles from '../../decorators/withStyles';
import classNames from 'classnames';

@withStyles(s)
class RightColumn extends Component {

  render() {
    return (
      <div className={classNames(s.rightColumn, s.RightColumnClearfix)}>

        <h1>Penny Books</h1>

        <h2>Find books that only cost one penny!</h2>

        <form action="/" method="post" className={s.rightColumnForm}>
          <label htmlFor="inputBox" className={s.RightColumnVisuallyHidden}>Find books</label>
          <input type="text" id="inputBox" name="inputBox" placeholder="Find books"
                 className={s.rightColumnFormInput}
                 value=""/>
          <input type="submit" className={s.rightColumnFormSearch} value="Search"/>
        </form>

        <div className={s.rightColumnIntroduction}>
          <p>Welcome to Penny Books - an austerity book search</p>
          <p>This website allows you to find books that are on sale for just one penny</p>
          <p>It uses data from amazon.co.uk</p>
          <p>It works best by searching for book titles</p>
          <p>This site has been created by coder Andy Walpole</p>
          <p>I hope you enjoy using this website</p>
          <p>If you are interested there is a full explanation of the underlying code here</p>
        </div>
      </div>

    );
  }
}

export default RightColumn;
