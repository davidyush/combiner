import React, { Component } from 'react'
import { connect } from 'react-redux'

class Rules extends Component {
  render() {
    return (
      <div className='rules'>
      <h2>rules</h2>
        {this.props.rules.map((e, i) => <h4 key={i}>{e}</h4>)}
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
