import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
      <div>
      <h1>Tags</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>searchname</th>
            <th>name</th>
            <th>extendedproperties</th>
          </tr>
        </thead>
        <tbody>
          {data.grippapi.tags.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.id}</td>
              <td>{node.searchname}</td>
              <td>{node.name}</td>
              <td>{node.extendedproperties}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  )
}

export const query = graphql`
query {
	grippapi {
	  tags(first: 10) {
	    edges {
	      node {
	        id,
	        name,
	        searchname,
	        extendedproperties
	      }
	    }
	  }
	}
}
`