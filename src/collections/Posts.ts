import { CollectionConfig } from "payload/types";
/* import TableElement from '../../TableElement';
import Icon from '../../Icon';
import ToolbarButton from '../../ToolbarButton'; */

import HR from "../components/HR";
import Table from "../components/Table";

const Posts: CollectionConfig = {
    slug: "posts",
    admin: {
        defaultColumns: ["title", "author", "description", "content", "category", "tags"],
        useAsTitle: "title",
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "title",
            type: "text",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "author",
            type: "relationship",
            relationTo: "users",
        },
        {
            name: "publishedDate",
            type: "date",
        },
        {
            name: "category",
            type: "relationship",
            relationTo: "categories",
        },
        {
            name: "tags",
            type: "relationship",
            relationTo: "tags",
            hasMany: true,
        },
        {
            name: "slug",
            type: "text",
        },
        {
            name: "content",
            type: "richText",
            admin: {
                elements: [
                    "h2",
                    "h3",
                    "h4",
                    "h5",
                    "h6",
                    HR,
                    Table,
                    "indent",
                    "link",
                    "ol",
                    "relationship",
                    "ul",
                    "upload",
                    "blockquote",
                    /* {
                        name: 'table',
                        Button: Icon,
                        Element: ToolbarButton,
                        plugins: []
                    } */
                ],
            },
        },
        {
            name: "status",
            type: "select",
            options: [
                {
                    value: "draft",
                    label: "Draft",
                },
                {
                    value: "published",
                    label: "Published",
                },
            ],
            defaultValue: "draft",
            admin: {
                position: "sidebar",
            },
        },
    ],
};

export default Posts;
