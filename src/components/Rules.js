import React, { Component } from 'react'
import { connect } from 'react-redux'

class Rules extends Component {
  render() {
    let startFile = `"use strict";\n\nmodule.exports = {\n  "rules": {\n`;
    let endFile = `  },\n}`;
    return (
      <div className='rules'>
      <h2 className='rules-title'>Your Rules</h2>
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
