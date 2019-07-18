/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
		  siteMetadata: {
			    title: `Gripp`,
			  },
	plugins : [
	    {
	        resolve: `gatsby-plugin-manifest`,
	        options: {
	          name: `Gripp API client`,
	          short_name: `Gripp API client`,
	          start_url: `/`,
	          background_color: `#6b37bf`,
	          theme_color: `#6b37bf`,
	          // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
	          // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
	          display: `standalone`,
	          icon: `src/images/icon.png`, // This path is relative to the root of the site.
	        },
	      },
	      `gatsby-plugin-offline`,
	      `gatsby-plugin-react-helmet`,
	      {
	          resolve: "gatsby-source-graphql",
	          options: {
	            // This type will contain remote schema Query type
	            typeName: "GRIPPAPI",
	            // This is the field under which it's accessible
	            fieldName: "grippapi",
	            // URL to query from
	            url: "http://gripp.localhost/api/graphql",
	          },
	        },
	    `gatsby-plugin-emotion`,
		{
			resolve : `gatsby-plugin-typography`,
			options : {
				pathToConfigModule : `src/utils/typography`,
			},
		},
	],
}