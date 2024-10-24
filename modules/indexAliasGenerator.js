/* eslint-disable no-undef */
import fetch from "node-fetch"
const consola = require("consola")
consola.level = 5

export default function () {
    this.nuxt.hook("generate:before", async () => {
        // console.log(generator)
        // console.log(generatorOptions)
        // console.log("In generate before hook for generating a new ES index: "+ JSON.stringify(this.nuxt.options.publicRuntimeConfig))
        const timeElapsed = Date.now()
        const now = new Date(timeElapsed)

        let esTempIndex = `${
            this.nuxt.options.publicRuntimeConfig.esIndexPrefix
        }-${now.toISOString().toLowerCase().replaceAll(":", "-")}`
        consola.debug("Index named:" + esTempIndex)
        //console.warn("Index path:"+`${this.nuxt.options.publicRuntimeConfig.esURL}/${esTempIndex}`)
        //console.warn("Index write key:"+this.nuxt.options.privateRuntimeConfig.esWriteKey)
        const response = await fetch(
            `${this.nuxt.options.publicRuntimeConfig.esURL}/${esTempIndex}`,
            {
                headers: {
                    Authorization: `ApiKey ${this.nuxt.options.privateRuntimeConfig.esWriteKey}`,
                    "Content-Type": "application/json",
                },
                method: "PUT",
            }
        )
        const body = await response.text()
        try {
            let testJson = JSON.parse(body)
            this.options.tempIndex = esTempIndex
            this.nuxt.options.publicRuntimeConfig["esTempIndex"] = esTempIndex

            consola.debug("Temp Index created:" + JSON.stringify(testJson))
        } catch (err) {
            consola.error("Error:", err)
            consola.error("Response body:", body)
            throw err
        }
    })
}
