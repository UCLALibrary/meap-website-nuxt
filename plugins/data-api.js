export default function ({ $graphql, query }, inject) {
    const ESApiKey = "bUZNSzlZSUJuVndMa0QwOEcyWDI6QzVYNVY5amdUdU96VXpKMFlBODZKUQ=="
    const ES_URL = "https://elastical.library.ucla.edu"

    async function getMapping(){
        const response = await fetch(`${ES_URL}/apps-dev-library-website/_mapping`, {
            headers: {
                'Authorization': `ApiKey ${ESApiKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const data = await response.json()
        return data
    }

    async function keywordSearch(keyword){
        //var data_url = new URL(`${ES_URL}/apps-dev-library-website/_search`)

        var params = {
            query: {
                query_string: {
                    query: "*"
                }
            }
        }
        
        const urlParams = new URLSearchParams(params).toString()
        console.log("paranaters: "+urlParams)
        const response = await fetch(`${ES_URL}/apps-dev-library-website/_search?q=*:*`, {
            headers: {
                'Authorization': `ApiKey ${ESApiKey}`,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        const data = await response.json()
        return data
    }
    inject('dataApi', {
        getMapping,
        keywordSearch,
        
    })

    // Create $craft and inject it into Vue components
    // Usage: `this.$craft({ query: gqlQuery, variables: { uri: `code/${this.$route.params.slug}` } })`
    
    // Create KY instance
    // const $craft = $http.create({
    //     prefixUrl: $config.craftApiUrl,
    // })
  
    // Add GraphQL authorization token for non-public schemas
    // if ($config.craftAuthToken !== '') {
    //     $craft.setToken($config.craftAuthToken, 'Bearer');
    // }
  
    // If `token` is set in query parameters, pass it along to Craft API endpoint
    // console.log("in craftjs plugin : token= ", query.token)
    //console.log("In craft.js "+ JSON.stringify(query))
    //$graphql.default.setHeader( 'X-Craft-Token', query.token )
    // inject('craftToken', query.token ? query.token : '')
}
