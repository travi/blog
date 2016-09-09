import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import './example.css'

export default class PostCSS extends React.Component {
  static render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | Hi PostCSSy friends`}>
        <div>
          <h1 className="the-postcss-class">
            Hi PostCSSy friends
          </h1>
          <div className="postcss-nav-example">
            <h2>Nav example</h2>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </DocumentTitle>
    )
  }
}
