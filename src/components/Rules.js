import React, { Component } from 'react'
import { connect } from 'react-redux'

class Rules extends Component {
  render() {
    const startFile = `{\n  "extends": "stylelint-config-standard",\n  "rules": {\n`;
    const endFile = `  }\n}`;
    return (
      <div className='rules'>
      <h2 className='rules-title'>Your config</h2>
        <pre className='rules-box'>
          {startFile}
          {this.props.rules.map((rule, index, arr) => (
            arr.length - 1 === index ?
            `    ${rule}\n` :
            `    ${rule},\n`
          ))}
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
