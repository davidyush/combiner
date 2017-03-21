import React, { Component } from 'react'
import { connect } from 'react-redux'


import styleconfig from 'stylelint-config-standard'
console.log(styleconfig);

class Rules extends Component {
  render() {
    let startFile = `{\n  "extends": "stylelint-config-standard",\n  "rules": {\n`;
    let endFile = `  },\n}`;
    return (
      <div className='rules'>
      <h2 className='rules-title'>Your stylelint.config.js</h2>
        <pre className='rules-box'>
          {startFile}
          {this.props.rules.map((rule, index) => `    ${rule},\n` )}
          {endFile}
        </pre>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rules
  }
}

export default connect(mapStateToProps, null)(Rules);
