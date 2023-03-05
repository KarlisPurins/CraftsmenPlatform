import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import LoginForm from '../components/loginForm'

const LoginPage = ({ data }) => {
  return (
    <Layout pageTitle="Ielogoties">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      <LoginForm buttonText={"Ielogoties"}>
      </LoginForm>
    
      
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "login"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Login" />

export default LoginPage