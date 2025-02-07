- API INTEGRATION PROCESS :

1. Install Sanity Client

First, install the Sanity client library in your project.

npm install @sanity/client

2. Configure the Sanity Client

Create a sanity.js file to configure the client with your Sanity project details (project ID, dataset, and API version).

3. Fetch Data with GROQ Query

Write a function to fetch data using a GROQ query.

import client from './sanity';

const fetchData = async () => {

const query = `*[_type == "product"] {
    _id,
    name,
    price,
    description
  }`;

try {
const data = await client.fetch(query);
console.log(data); // Handle the data (e.g., display on your page)

} catch (error) {
console.error('Error fetching data:', error);
}
};

fetchData();

#

- ADJUSTMENTS MADE TO SCHEMA :

export const productSchema = defineType({

name: "products",
title: "Products",
type: "document",

fields: [
{
name: "title",
title: "Product Title",
type: "string",
},

    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },

],
});

- MIGRATION STEPS AND TOOLS USED :

1. Sanity Installation

First we have to install sanity by:

npm create sanity@latest

2. Sanity Schema

After the installation Navigate to your schema folder:
If you have a src folder, go to /src/sanity/schemaTypes.
Otherwise, go to /sanity/schemaTypes.

Than place your sanity schema there.

Don't forget to import schema's in your index.ts file

3. Data Migration Script

- Create .env file and add the following variables:

NEXT_PUBLIC_SANITY_PROJECT_ID="<Project ID>" // Add your project Id
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_AUTH_TOKEN="<Auth Token>" // Add your token

- Create migrate.mjs inside of the script folder and put your migarting data there

- Open `package.json` file and add the following code inside of scripts:

       "migrate": "node scripts/migrate.mjs"


- Install

         npm install dotenv

- Now run the command 

        npm run migrate