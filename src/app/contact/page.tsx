"use client";

import { useFormik } from "formik";
import { Navigation } from "@/components/nav/Navigation";
import * as Yup from "yup";

type TErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
      "Invalid email address",
    )
    .required("Email is required"),
  message: Yup.string().required("Required"),
});
const a = "3";
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema,
  });

  console.log(formik.values);
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <div className="flex flex-col items-center justify-center gap-midium h-[100vh]">
        <h1 className="text-3xl">Contact Me</h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col w-[400px] gap-midium"
        >
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="h-[40px] p-[10px] rounded"
              type="text"
              placeholder="name"
              name="name"
              id="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <p className="text-red-500">{formik.errors.name}</p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="h-[40px] p-[10px] rounded"
              type="text"
              placeholder="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <input
              className="h-[40px] p-[10px] rounded"
              type="text"
              placeholder="message"
              name="message"
              id="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />
            {formik.touched.message && formik.errors.message ? (
              <p className="text-red-500">{formik.errors.message}</p>
            ) : null}
          </div>
          <button
            className="h-[40px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
