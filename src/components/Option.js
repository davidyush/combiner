import React, { Component } from 'react'

class Option extends Component {
  clickHandler = () => {
    let value = this.props.value;
    if(typeof value === 'string') {
      value = `"${this.props.value}"`
    }

    this.props.handlerClick(`"${this.props.rule}": ${value}`);
  }
  render() {
    return (
      <div className='option' onClick={this.clickHandler}>
        <h4 className='option-title'>{this.props.title}</h4>
        <pre>
          {this.props.code}
        </pre>
      </div>
    )
  }
}

export default Option;
