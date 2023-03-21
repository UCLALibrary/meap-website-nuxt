const config = {
    project: {
        searchFields: ["title^3", "text^3", "richTextSimplified^2"],
        filters: [
            {
                label: "Topic",
                esFieldName: "meapProjectTopic.title",
                inputType: "checkbox",
            },
            {
                label: "Region",
                esFieldName: "region.title",
                inputType: "checkbox",
            },
            {
                label: "Project Type",
                esFieldName: "projectType",
                inputType: "checkbox",
            },
        ],
        resultFields: ["title", "text", "physicalDigital", "uri", "heroImage"],
        sortField: "title.keyword",
        orderBy: "asc",
    },
}

export default config
