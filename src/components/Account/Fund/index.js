import React from 'react';
import { useFormik } from 'formik';
import './style.css';
import { model, initialValues, Schema } from '../../../forms/Account';
import { CustomTextField } from '../../../forms/Shared';

const { fund: { formField: { amount } } } = model;
const { fundSchema } = Schema;
const { fundInitialValues } = initialValues;
const Fund = () => {
  const {
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur,
    isSubmitting,
    dirty,
    isValid,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: fundInitialValues,
    validationSchema: fundSchema,
    onSubmit: async ({ amount }) => {
      console.log(amount);
    },
  });
  return (
    <div className="fund">
      <form className="fund-form w-50" onSubmit={handleSubmit}>
        <div className="field">
          <CustomTextField
            name={amount.name}
            type="number"
            placeholder="Amount"
            value={values.amount}
            error={errors.amount}
            touched={touched.amount}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </div>
        <button
          type="submit"
          className="auth-btn"
          disabled={isSubmitting || !(dirty && isValid)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Fund;
