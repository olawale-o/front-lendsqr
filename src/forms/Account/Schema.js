import * as Yup from 'yup';
import model from './model';

const {
  fund: { formField: { amount } },
  transfer: { formField: { amountToTransfer, recipient } },
} = model;
  
export default {
  fundSchema: () => Yup.object().shape({
    [amount.name]: Yup.string().required(amount.error.required).label(amount.name),
  }),
  transferSchema: () => Yup.object().shape({
    [amountToTransfer.name]: Yup.number().required(amountToTransfer.error.required).label(amountToTransfer.name),
    [recipient.name]: Yup.string().required(recipient.error.required).label(recipient.name),
  }),
};
