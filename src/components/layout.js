import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
  } from './layout.module.css'


const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query MyQuery {
        site {
            id
            siteMetadata {
                title
            }
        }
    }
    `)
  return (
    
    <div className={container}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Veikals
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              Par Mums
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blogs
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/contacts" className={navLinkText}>
              Kontakti
            </Link>
          </li>
            <li className={navLinkItem}>
            <Link to="/login" className={navLinkText}>
              Mans Profils
            </Link>
          </li>
          
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout