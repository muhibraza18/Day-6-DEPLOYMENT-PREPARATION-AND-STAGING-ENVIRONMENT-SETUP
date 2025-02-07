export default{
    
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
        description: 'A unique identifier for the order.',
        validation: Rule => Rule.required()
      },
      {
        name: 'customer',
        type: 'reference',
        to: [{ type: 'customer' }],
        title: 'Customer',
        description: 'The customer who placed the order.',
        validation: Rule => Rule.required()
      },
      {
        name: 'products',
        type: 'array',
        title: 'Ordered Products',
        description: 'List of products in the order.',
        of: [
          {
            type: 'reference',
            to: [{ type: 'product' }],
          },
        ],
        validation: Rule => Rule.required().min(1)
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
        description: 'The total cost of the order.',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
        description: 'The date when the order was placed.',
        validation: Rule => Rule.required()
      },
      {
        name: 'shippingAddress',
        type: 'object',
        title: 'Shipping Address',
        fields: [
          {
            name: 'street',
            type: 'string',
            title: 'Street Address',
            validation: Rule => Rule.required()
          },
          {
            name: 'city',
            type: 'string',
            title: 'City',
            validation: Rule => Rule.required()
          },
          {
            name: 'state',
            type: 'string',
            title: 'State',
          },
          {
            name: 'zip',
            type: 'string',
            title: 'ZIP Code',
            validation: Rule => Rule.required()
          },
          {
            name: 'country',
            type: 'string',
            title: 'Country',
            validation: Rule => Rule.required()
          },
        ],
      },
      {
        name: 'orderStatus',
        type: 'string',
        title: 'Order Status',
        description: 'Current status of the order.',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Processing', value: 'processing' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
          layout: 'dropdown'
        },
        validation: Rule => Rule.required()
      },
      {
        name: 'paymentStatus',
        type: 'string',
        title: 'Payment Status',
        description: 'Payment status of the order.',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Paid', value: 'paid' },
            { title: 'Failed', value: 'failed' },
          ],
          layout: 'dropdown'
        },
        validation: Rule => Rule.required()
      },
    ],

}