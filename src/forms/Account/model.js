export default {
  name: 'account',
  fund: {
    formField: {
      amount: {
        name: 'amount',
        error: {
          required: 'Amount is required',
        },
      },
    },
  },
  transfer: {
    formField: {
      amountToTransfer: {
        name: 'amountToTransfer',
        error: {
          required: 'Amount is required',
        },
      },
      recipient: {
        name: 'recipient',
        error: {
          required: 'Recipient is required',
        },
      },
    },
  },
};
      