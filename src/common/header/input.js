import React, { Component } from 'react';
import { Input } from 'antd';

const Search = Input.Search;

class Inputer extends Component{
  render(){
    return(
        <div>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            enterButton
          />
        </div>
      )
  }
}

export default Inputer;