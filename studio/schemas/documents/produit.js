import { FaWineBottle } from "react-icons/fa";

export default {
  name: "produit",
  type: "document",
  title: "Produits",
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
      title: "Gamme",
      to: [{ type: "game" }],
    },
    // {
    //   name: "bouchon",
    //   type: "reference",
    //   title: "Couleur bouchon",
    //   to: [{ type: "bouchon" }],
    // },
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
      name: "miniImage",
      type: "image",
      title: "Mini Image",
    },
    {
      name: "genre",
      type: "string",
      title: "Genre",
    },
    {
      name: "description",
      type: "localeBody",
      title: "Description",
    },
    {
      name: "fiche",
      type: "localeBody",
      title: "Fiche Technique",
    },
  ],
};
