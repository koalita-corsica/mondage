import { AiFillTags } from 'react-icons/ai'

export default {
    name: "game",
    type: "document",
    title: "Game",
    icon: AiFillTags,
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
        },
        {
            name: "slug",
            type: "slug",
            title: "Slug",
            description:
              "Some frontends will require a slug to be set to be able to show the post",
            options: {
              source: "title",
              maxLength: 96,
            },
          },
        {
            name: "logo",
            type: "image",
            title: "Logo"
        },
        {
            name: "description",
            type: "array",
            title: "Description",
            of: [{ type: "block"}]
        },
        {
            name: "produits",
            type: "array",
            title: "Produits",
            of: [
                {
                    type: "reference",
                    to: [
                        {type: "produit"}
                    ]
                }
            ]
        }
    ]
}