import React, { Component } from 'react'
import styleconfig from 'stylelint-config-standard'

class Option extends Component {
  checkRule = (key, value) => {
    const { rules } = styleconfig;
    const rulesKeys = Object.keys(rules);

    let ruleInConfig = rulesKeys.find(rule => rule === key);

    if(rules[key] !== value || ruleInConfig === undefined) {
      return true;
    } else {
      return false;
    }

  }

  clickHandler = () => {
    let value = this.props.value;
    let isPassed = this.checkRule(this.props.rule, this.props.value);

    if(typeof value === 'string') {
      value = `"${this.props.value}"`;
    }

    if(isPassed) {
      this.props.handlerClick(`"${this.props.rule}": ${value}`);
    } else {
      this.props.handlerClick(null);
    }

  }

  render() {
    return (
      <div className='option' onClick={this.clickHandler}>
        <h4 className='option-title'>{this.props.title}</h4>
        <code className='option-code'>
          {this.props.code}
        </code>
      </div>
    )
  }
}

export default Option;
