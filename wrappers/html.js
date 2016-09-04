import React from 'react'

module.exports = React.createClass({
  propTypes () {
    return {
      router: React.PropTypes.object,
    }
  },
  render () {
    const page = this.props.route.page.data
    return (
      <div dangerouslySetInnerHTML={{ __html: page.body }} />
    )
  },
})
