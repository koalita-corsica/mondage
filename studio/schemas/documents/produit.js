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
            name: "game",
            type: "reference",
            title: "Game",
            to: [{type: "game"}]
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            // readOnly: true,
            description:
              "Some frontends will require a slug to be set to be able to show the post",
            options: {
              source: "title",
              maxLength: 96,
            },
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
        },
        {
            name: "fiche",
            type: "array",
            title: "Fiche Technique",
            of: [
                {type: "block"}
            ]
        }
    ]
}