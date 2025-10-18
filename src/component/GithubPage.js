import React from 'react'
import PropTypes from 'prop-types'
import '../stylesheet/GithubPage.css'

const GithubPage = ({ github='' }) =>
  <div className='github-page'>
    <a href={github} className ='github-address'>Github</a>
    <a href={'https://github.com/Rishabh028/Data-Structure--Visualization'} className = 'github-address'>Library</a>
  </div>

GithubPage.propTypes = {
  github: PropTypes.string
}

export default GithubPage