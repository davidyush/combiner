import React, { Component } from 'react'

class Option extends Component {
  clickHandler = () => {
    this.props.handlerClick(`"${this.props.rule}": ${this.props.value}`);
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
