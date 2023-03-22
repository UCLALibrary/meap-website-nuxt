const config = {
    project: {
        searchFields: ["title^3", "summary^3"],
        filters: [
            {
                label: "Topic",
                esFieldName: "meapProjectTopic.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Region",
                esFieldName: "region.title.keyword",
                inputType: "checkbox",
            },
            {
                label: "Project Type",
                esFieldName: "projectType.keyword",
                inputType: "checkbox",
            },
        ],
        resultFields: ["title", "summary", "uri", "heroImage"],
        sortField: "title.keyword",
        orderBy: "asc",
    },
}

export default config
