import React, { Component } from 'react'

class index extends Component {
  render() {
    return(
      <article>
        <h1 className="title">Mi primer App en React con {this.props.name}</h1>
      </article>
    )
  }
}

export default index