export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Product Name',
        description: 'The name of the product.',
        validation: Rule => Rule.required().min(3).max(100)
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price',
        description: 'The price of the product in USD.',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'stock',
        type: 'number',
        title: 'Stock Level',
        description: 'The quantity of the product available in stock.',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'description',
        type: 'text',
        title: 'Product Description',
        description: 'A detailed description of the product.',
        validation: Rule => Rule.required().min(10)
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        description: 'An image of the product.',
        options: {
          hotspot: true
        }
      },
      {
        name: 'category',
        type: 'string',
        title: 'Category',
        description: 'The category of the product (e.g., Electronics, Apparel).',
        options: {
          list: [
            { title: 'Electronics', value: 'electronics' },
            { title: 'Apparel', value: 'apparel' },
            { title: 'Furniture', value: 'furniture' }
          ],
          layout: 'dropdown'
        }
      },
      {
        name: 'rating',
        type: 'number',
        title: 'Product Rating',
        description: 'Average user rating for the product.',
        validation: Rule => Rule.min(0).max(5)
      }
    ],
}