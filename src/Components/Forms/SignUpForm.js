import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  gender: Yup.string().required('Gender is required'),
  phone: Yup.number().required('Phone number is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(8, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  subscription: Yup.string().required('Subscription is required'),
  termsAndConditions: Yup.boolean().oneOf([true], 'Please Accept Terms & Conditions'),
  additionalInfoFlag: Yup.boolean(),
  additionalInfo: Yup.string().when('additionalInfoFlag', {
    is: true,
    then: Yup.string().required('Additional Information is required'),
  }),
});

const SignupForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          gender: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          subscription: '',
          termsAndConditions: false,
          additionalInfoFlag: false,
          additionalInfo: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            {console.log(formik.errors)}
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <span className="text-danger">{formik.errors.firstName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <span className="text-danger">{formik.errors.lastName}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'male'}
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'female'}
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === 'other'}
                  />
                  <label className="form-check-label" htmlFor="other">
                    Other
                  </label>
                </div>
              </div>
              {formik.touched.gender && formik.errors.gender && (
                <span className="text-danger">{formik.errors.gender}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-danger">{formik.errors.email}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                className="form-control"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.touched.phone && formik.errors.phone && (
                <span className="text-danger">{formik.errors.phone}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <span className="text-danger">{formik.errors.password}</span>
              )}
            </div>
            <div className="form-group mt-2">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <span className="text-danger">{formik.errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-group mt-2">
              <label htmlFor="subscription">Subscription</label>
              <select
                className="form-control"
                name="subscription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subscription}>
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </select>
              {formik.touched.subscription && formik.errors.subscription && (
                <span className="text-danger">{formik.errors.subscription}</span>
              )}
            </div>

            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="additionalInfoFlag"
                  name="additionalInfoFlag"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfoFlag}
                />
                <label className="form-check-label" htmlFor="additionalInfoFlag">
                  Additional Information
                </label>
              </div>
            </div>

            {formik.values.additionalInfoFlag && (
              <div className="form-group mt-2">
                <label htmlFor="additionalInfo">Enter Additional Information</label>
                <textarea
                  className="form-control"
                  id="additionalInfo"
                  name="additionalInfo"
                  onChange={formik.handleBlur}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfo}></textarea>
                {formik.touched.additionalInfo && formik.errors.additionalInfo && (
                  <span className="text-danger">{formik.errors.additionalInfo}</span>
                )}
              </div>
            )}

            <div className="form-group mt-2">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndConditions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.termsAndConditions}
                />
                <label className="form-check-label" htmlFor="termsAndConditions">
                  Accept terms and conditions.
                </label>
                {formik.touched.termsAndConditions && formik.errors.termsAndConditions && (
                  <span className="text-danger">{formik.errors.termsAndConditions}</span>
                )}
              </div>
            </div>

            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default SignupForm;
