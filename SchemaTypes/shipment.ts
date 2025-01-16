export default{
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
}