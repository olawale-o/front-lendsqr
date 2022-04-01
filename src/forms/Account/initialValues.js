import model from './model';

const {
  fund: { formField: { amount } },
  transfer: { formField: { amountToTransfer, recipient } },
} = model;

export default {
  fundInitialValues: {
    [amount.name]: '',
  },
  transferInitialValues: {
    [amountToTransfer.name]: '',
    [recipient.name]: '',
  },
};
