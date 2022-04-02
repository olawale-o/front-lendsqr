import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import './style.css';
import { model, initialValues, Schema } from '../../../forms/Account';
import { CustomTextField } from '../../../forms/Shared';
import { currentUser, currentUserSelector } from '../../../store';
import { fundAccount } from '../../../services/userService';

const { fund: { formField: { amount } } } = model;
const { fundSchema } = Schema;
const { fundInitialValues } = initialValues;
const Fund = () => {
  const navigate = useNavigate();
  const updateUser = useSetRecoilState(currentUser);
  const { id } = useRecoilValue(currentUserSelector);
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
    initialValues: fundInitialValues,
    validationSchema: fundSchema,
    onSubmit: async ({ amount }) => {
      const user = await fundAccount(id, { amount });
      updateUser(user);
      navigate(`/${user.id}`, { replace: true });
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
          className="button button-primary"
          disabled={isSubmitting || !(dirty && isValid)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Fund;
