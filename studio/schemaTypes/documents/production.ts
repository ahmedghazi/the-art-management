import { defineField, defineArrayMember, defineType } from "sanity";
import modulesList from "../objects/modules/modulesList";
import { baseLanguage } from "../locale/supportedLanguages";
import { FaBlog } from "react-icons/fa";

export default defineType({
  type: "document",
  name: "production",
  title: "Production",
  icon: FaBlog,
  groups: [
    {
      default: true,
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
    }),

    defineField({
      name: "title",
      type: "localeString",
      title: "Title",
      group: "editorial",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "URL basée sur le titre (sans espace ni caractère autre que a-z-0-9",
      options: {
        source: `title.${baseLanguage}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
      group: "editorial",
    }),

    defineField({
      name: "text",
      title: "Texte",
      type: "localeBlockContent",
      group: "editorial",
    }),

    defineField({
      name: "items",
      title: "Items",
      description: "",
      type: "array",
      of: [{ type: "productionItem" }],
      group: "editorial",
    }),
  ],

  preview: {
    select: {
      title: `title.${baseLanguage}`,
      slug: "slug",
      image: "seo.metaImage",
    },
    prepare(selection) {
      const { title, slug, image } = selection;
      return {
        title: title,
        subtitle: `/${slug.current}`,
        media: image,
      };
    },
  },
});
