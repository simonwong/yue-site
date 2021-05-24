import * as React from 'react'

import PlayerAny from './PlayerAny'

const Footer = () => (
  <footer className="flex items-center mt-8">
    <div>
      <PlayerAny />
    </div>
    <div className="flex-1 self-end">
      © 2018 - {new Date().getFullYear()},{' '}
      <a href="https://beian.miit.gov.cn/" target="__blank" rel="noopener">
        浙ICP备18056882号-1
      </a>
      , Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  </footer>
)

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
