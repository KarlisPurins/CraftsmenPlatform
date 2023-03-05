import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import RegisterForm from '../components/registerForm'

const LoginPage = ({ data }) => {
  return (
    <Layout pageTitle="Reģistrēties">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
      <RegisterForm buttonText={"Reģistrēties"}>
      </RegisterForm>
    
      
    </Layout>
    
  )
}

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "register"}}) {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Register" />

export default LoginPage