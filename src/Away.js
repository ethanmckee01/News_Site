import React, { Component } from 'react';
import SearchBox from './SearchBox';

export default class Away extends Component {

    constructor() {
      super();
      this.state = {
        sources: []
      };
    }     

  render() {
    return(
      <div>
          <SearchBox />
      </div>
    )
};
}