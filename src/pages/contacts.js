// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const ContactsPage = () => {
  return (
    <Layout pageTitle="Kontakti">
      <p>Phone: 22299911</p>
    </Layout>
  )
}

  
export const Head = () => <Seo title="Contacts" /> //Metadata info in "Head"

// Step 3: Export your component
export default ContactsPage