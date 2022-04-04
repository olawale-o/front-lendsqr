import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import './style.css';
import { model, initialValues, Schema } from '../../../forms/Account';
import { CustomTextField, CustomTextArea } from '../../../forms/Shared';
import { currentUser } from '../../../store';
import { transfer } from '../../../services/userService';

const { transfer: { formField: { amountToTransfer, recipient, description } } } = model;
const { transferSchema } = Schema;
const { transferInitialValues } = initialValues;

const Transfer = () => {
  const navigate = useNavigate();
  const [user, updateUser] = useRecoilState(currentUser);;
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    dirty,
    isValid,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: transferInitialValues,
    validationSchema: transferSchema,
    onSubmit: async ({ amountToTransfer, recipient, description }) => {
      const transaction = await transfer({
        amount: amountToTransfer,
        receiver: recipient,
        description,
        sender: user.account_no,
      });
      if (transaction) {
        updateUser((prevState) => ({ ...prevState, balance: parseFloat(prevState.balance) - parseFloat(amountToTransfer) }));
        navigate(`/${user.id}`, { replace: true });
      }
    },
  });
  return (
    <div className="transfer">
      <form className="fund-form w-50" onSubmit={handleSubmit}>
        <div className="user-balance">
          <span className="title text__white">Current balance</span>
          <span className="balance text__white fw__bolder">$ {user.balance}</span>
        </div>
        <div className="field">
          <CustomTextField
            name={amountToTransfer.name}
            type="number"
            placeholder="Amount"
            value={values.amountToTransfer}
            error={errors.amountToTransfer}
            touched={touched.amountToTransfer}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="field">
          <CustomTextField
            name={recipient.name}
            type="text"
            placeholder="Recipient Account Number"
            value={values.recipient}
            error={errors.recipient}
            touched={touched.recipient}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <div className="field">
          <CustomTextArea
            name={description.name}
            placeholder="Description"
            value={values.description}
            error={errors.description}
            touched={touched.description}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <button
          type="submit"
          className="button button-primary"
          disabled={isSubmitting || !(dirty && isValid)}
        >
          Transfer
        </button>
      </form>
    </div>
  );
};

export default Transfer;
