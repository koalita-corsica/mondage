export default {
    name: "div",
    type: "object",
    title: "Div",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "title1",
            type: "string",
            title: "Title 1"
        },
        {
            name: "desc",
            type: "array",
            title: "Description",
            of: [{ type: "block"}]
        }
    ]
}