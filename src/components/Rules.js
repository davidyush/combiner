import React, { Component } from 'react'
import { connect } from 'react-redux'

class Rules extends Component {
  render() {
    return (
      <div className='rules'>
      <h2 className='rules-title'>Your Rules</h2>
        <div className='rules-box'>
          {this.props.rules.map((rule, index) => <p key={index}> {rule}</p>)}
        </div>
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
