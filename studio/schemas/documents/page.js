import { RiPagesFill } from 'react-icons/ri'

export default {
    name: "page",
    type: "document",
    title: "Page",
    icon: RiPagesFill,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "pageBuilder",
            type: "array",
            title: "Page Builder",
            of : [
                {type: "div"},
            ]
        }
    ]
}