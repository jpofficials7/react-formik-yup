import React from 'react';

const SigninForm = () => {
  return (
    <>
      <form>
        <div className="form-group">
          <label for="firstName">First Name</label>
          <input type="text" className="form-control" name="firstName" />
        </div>
        <div className="form-group mt-2">
          <label for="lastName">Last Name</label>
          <input type="text" className="form-control" name="lastName" />
        </div>
        <div className="form-group mt-2">
          <label>Gender</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
              <label className="form-check-label" for="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
              <label className="form-check-label" for="female">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
              <label className="form-check-label" for="other">
                Other
              </label>
            </div>
          </div>
        </div>
        <div className="form-group mt-2">
          <label for="email">Email</label>
          <input type="text" className="form-control" name="email" />
        </div>
        <div className="form-group mt-2">
          <label for="phone">Phone Number</label>
          <input type="number" className="form-control" name="phone" />
        </div>
        <div className="form-group mt-2">
          <label for="password">Password</label>
          <input type="password" className="form-control" name="password" />
        </div>
        <div className="form-group mt-2">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" className="form-control" name="confirmPassword" />
        </div>

        <div className="form-group mt-2">
          <label for="confirmPassword">Subscription</label>
          <select className="form-control" name="subscription">
            <option value="">Select</option>
            <option value="subscription-1">Free</option>
            <option value="subscription-2">Pro</option>
            <option value="subscription-3">Enterprise</option>
          </select>
        </div>

        <div className="form-group mt-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="termsAndCondtions" />
            <label className="form-check-label" htmlFor="termsAndCondtions">
              Accept terms and conditions.
            </label>
          </div>
        </div>

        <div className="d-grid mt-2">
          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
};

export default SigninForm;
