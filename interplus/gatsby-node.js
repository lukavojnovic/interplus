const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query templatePages {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: `/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/pageTemplate.js`),
      context: { slug: node.frontmatter.slug },
    })
  })
}
