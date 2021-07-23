import { GiSmokeBomb } from "react-icons/gi";

export default {
  name: "bouchon",
  type: "document",
  title: "bouchon",
  icon: GiSmokeBomb,
  fields: [
    {
      name: "title",
      type: "string",
      title: "title",
    },
    {
        name: "couleur",
        type: "string",
        title: "couleur",
    },
    {
        name: "logo",
        type: "image",
        title: "Logo",
    },
    {
        name: "desc",
        type: "localeBody",
        title: "Description",
    },
  ],
};
