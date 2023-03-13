import React, { useState } from "react";
function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange   = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   localStorage.setItem("user", JSON.stringify(formData));
  //   window.alert("You have successfully signed up!");
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate first name and last name
    if (
      typeof formData.firstName !== "string" ||
      typeof formData.lastName !== "string"
    ) {
      window.alert("First name and last name must be strings.");
      return;
    }

    // validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      window.alert("Please enter a valid email address.");
      return;
    }

    // validate password
    if (formData.password.length < 6) {
      window.alert("Password must be at least 6 characters long.");
      return;
    }

    localStorage.setItem("user", JSON.stringify(formData));
    window.alert("You have successfully signed up!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring"
              >
                Sign Up
              </button>
         
            </div>
          </form>
        </div>
      </div>
    </div>
    // </div>
  );
}
export default SignUp;

// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// const SignUp = () => {
//   const [values, setValues] = useState({
//     Name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (event) => {
//     setValues({ ...values, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const errors = validate(values);
//     setErrors(errors);
//     if (Object.keys(errors).length === 0) {
//       localStorage.setItem("values", JSON.stringify(values, null, 2));
//       alert("You have successfully registered");
//     }
//   };

//   const validate = (values) => {
//     const errors = {};

//     if (!values.Name) {
//       errors.Name = 'Required';
//     }

//     if (!values.email) {
//       errors.email = 'Required';
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!values.password) {
//       errors.password = 'Required';
//     } else if (values.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     if (!values.confirmPassword) {
//       errors.confirmPassword = 'Required';
//     } else if (values.confirmPassword !== values.password) {
//       errors.confirmPassword = 'Passwords must match';
//     }

//     return errors;
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <form className="w-2/4 " onSubmit={handleSubmit}>
//         <label htmlFor="Name">Name</label>
//         <input
//           type="text"
//           id="Name"
//           name="Name"
//           value={values.Name}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {errors.Name && <div>{errors.Name}</div>}

//         <label htmlFor="email">Email Address</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={values.email}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {errors.email && <div>{errors.email}</div>}

//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={values.password}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {errors.password && <div>{errors.password}</div>}

//         <label htmlFor="confirmPassword">Confirm Password</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={values.confirmPassword}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
//         />
//         {errors.confirmPassword && <div>{errors.confirmPassword}</div>}

//         <button type="submit">Sign Up</button


