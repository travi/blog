import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import './example.less'

export default function Less () {
  return (
    <DocumentTitle title={`${config.siteTitle} | Hi lessy friends`}>
      <div>
        <h1 className="the-less-class">
          Hi lessy friends
        </h1>
        <div className="less-nav-example">
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
