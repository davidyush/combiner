import React, { Component } from 'react'
import Option from './Option'
import questions from '../quiz/questions'

import { connect } from 'react-redux'
import { addRule } from '../actions'


class Options extends Component {
  constructor() {
    super();
    this.state = { num: 0 };
  }

  handlerClick = (rule) => {
    this.props.addRule(rule);
    this.setState({
      num: ++this.state.num
    });
  }

  render() {
    const { rule } = questions[this.state.num];
    console.log(questions.length);
    return (
      <div className='options'>
        {questions[this.state.num].options.map((e,index) => (
          <Option
            handlerClick={this.handlerClick}
            value={e.value}
            key={Date.now() + index}
            rule={rule}
            title={e.title}
            code={e.code}/>
        ))}
      </div>
    )
  }
}

export default connect(null, { addRule })(Options);
