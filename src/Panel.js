import React from 'react'
import './styles/styles.scss'



export default class Panel extends React.Component {

  render() {
    return (
      <div className={this.props.side}>
        <h1>{this.props.title}</h1>
        <p>{this.props.date}</p>
      </div>
    )
  }

}
