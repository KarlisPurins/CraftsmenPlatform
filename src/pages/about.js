// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
}

// Defining the <Greeting> component
const Greeting = (props) => {
    return (
      <p>Hi {props.name}!</p>
    )
}
  
export const Head = () => <Seo title="About Me" /> //Metadata info in "Head"

// Step 3: Export your component
export default AboutPage