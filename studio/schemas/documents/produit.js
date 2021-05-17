import { FaWineBottle } from 'react-icons/fa'

export default {
    name: "produit",
    type: "document",
    title: "Produit",
    icon: FaWineBottle,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "image",
            type: "image",
            title: "Image",
        },
        {
            name: "genre",
            type: "string",
            title: "Genre",
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            of: [
                {type: "block"}
            ]
        }
    ]
}