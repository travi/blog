import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import './example.scss'

export default function Sass () {
  return (
    <DocumentTitle title={`${config.siteTitle} | Hi sassy friends`}>
      <div>
        <h1 className="the-sass-class">
          Hi sassy friends
        </h1>
        <div className="sass-nav-example">
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
