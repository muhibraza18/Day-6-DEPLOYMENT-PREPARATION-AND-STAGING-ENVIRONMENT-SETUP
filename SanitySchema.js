// Schema of Product
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


    // Schema for Order

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

    // Schema Of Shipment
    name: 'shipment',
    type: 'document',
    title: 'Shipment',
    fields: [
      {
        name: 'shipmentId',
        type: 'string',
        title: 'Shipment ID',
        description: 'A unique identifier for the shipment.',
        validation: Rule => Rule.required()
      },
      {
        name: 'orderId',
        type: 'string',
        title: 'Order ID',
        description: 'The ID of the order associated with this shipment.',
        validation: Rule => Rule.required()
      },
      {
        name: 'shippingCarrier',
        type: 'string',
        title: 'Shipping Carrier',
        description: 'The carrier handling the shipment (e.g., FedEx, UPS, DHL).'
      },
      {
        name: 'trackingNumber',
        type: 'string',
        title: 'Tracking Number',
        description: 'The tracking number for the shipment.'
      },
      {
        name: 'shipmentDate',
        type: 'datetime',
        title: 'Shipment Date',
        description: 'The date when the shipment was dispatched.'
      },
      {
        name: 'estimatedDeliveryDate',
        type: 'datetime',
        title: 'Estimated Delivery Date',
        description: 'The estimated delivery date for the shipment.'
      },
      {
        name: 'deliveryDate',
        type: 'datetime',
        title: 'Actual Delivery Date',
        description: 'The actual date when the shipment was delivered, if available.'
      },
      {
        name: 'shipmentStatus',
        type: 'string',
        title: 'Shipment Status',
        description: 'The current status of the shipment.',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Shipped', value: 'shipped' },
            { title: 'In Transit', value: 'in_transit' },
            { title: 'Delivered', value: 'delivered' },
            { title: 'Failed', value: 'failed' },
          ],
          layout: 'dropdown'
        }
      },
    ],
  };
  