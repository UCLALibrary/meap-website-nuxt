/* eslint-disable no-undef */
import fetch from "node-fetch"
const consola = require("consola")
consola.level = 5

export default function () {
    this.nuxt.hook("generate:done", async () => {
        consola.debug("In generate done hook, starting alias swap and index cleanup")
        
        const publicConfig = this.nuxt.options.publicRuntimeConfig
        const privateConfig = this.nuxt.options.privateRuntimeConfig
        const esUrl = publicConfig.esURL
        const esAlias = publicConfig.esIndex
        const tempIndex = publicConfig.esTempIndex
        const headers = {
            Authorization: `ApiKey ${privateConfig.esWriteKey}`,
            "Content-Type": "application/json",
        }

        // Step 1: Fetch current alias indices
        let indicesToDelete = []
        try {
            const aliasResponse = await fetch(`${esUrl}/_alias/${esAlias}`, {
                headers,
                method: "GET",
            })
            const aliasData = await aliasResponse.json()
            indicesToDelete = Object.keys(aliasData) // Extract the indices associated with the alias
            consola.debug("Indices associated with alias:", indicesToDelete)
        } catch (err) {
            consola.error("Error fetching alias indices:", err)
            throw err
        }

        // Step 2: Update the alias to point to the new index
        try {
            const aliasUpdateResponse = await fetch(`${esUrl}/_aliases`, {
                headers,
                method: "POST",
                body: JSON.stringify({
                    actions: [
                        {
                            remove: { index: "*", alias: esAlias },
                        },
                        {
                            add: { indices: [tempIndex], alias: esAlias },
                        },
                    ],
                }),
            })
            const aliasUpdateBody = await aliasUpdateResponse.text()
            const aliasUpdateJson = JSON.parse(aliasUpdateBody)
            consola.debug("Alias updated:", JSON.stringify(aliasUpdateJson))
        } catch (err) {
            consola.error("Error updating alias:", err)
            throw err
        }

        // Step 3: Delete old indices
        try {
            for (const index of indicesToDelete) {
                if (index === tempIndex) continue // Skip the new temp index

                consola.debug(`Deleting index: ${index}`)
                const deleteResponse = await fetch(`${esUrl}/${index}`, {
                    headers,
                    method: "DELETE",
                })
                const deleteBody = await deleteResponse.text()
                consola.debug(`Deleted index ${index}: ${deleteBody}`)
            }
        } catch (err) {
            consola.error("Error deleting old indices:", err)
        }
    })
}