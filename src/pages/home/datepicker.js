import React, { Component } from 'react';
import { DatePicker } from 'antd';

// const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

class Datepicker extends Component{
  render(){
    return(
      <div>
        <DatePicker
          showTime
          format="YYYY-MM-DD"
          placeholder="Select Time"
          onChange={onChange}
          onOk={onOk}
        />
      </div>
      )
  }
}

export default Datepicker;