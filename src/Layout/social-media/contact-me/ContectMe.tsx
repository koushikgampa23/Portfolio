import { Input, Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import { Form, Formik, FormikValues, useField } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  ...props
}: InputProps) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <label htmlFor={name} className="text-xl">
        {label}
      </label>
      {type === "textarea" ? (
        <TextArea {...field} {...props} id={name} rows={10} />
      ) : (
        <Input {...field} {...props} id={name} />
      )}
      {meta.touched && meta.error ? (
        <div style={{ color: "red" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export const ContactMe = () => {
  const initialValues = {
    access_key: process.env.REACT_APP_Email_Token,
    fullName: "",
    email: "",
    subject: "",
    message: "",
    contactNumber: "",
  };
  const validateSchema = Yup.object({
    fullName: Yup.string().required("*Required Field"),
    email: Yup.string().email("*Invalid Email").required("*Required Field"),
    contactNumber: Yup.string().matches(
      /^[0-9]{10}$/,
      "Phone number must be exactly 10 digits",
    ),
    subject: Yup.string().required("*Required Field"),
    message: Yup.string().required("*Required Field"),
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (values: FormikValues) => {
    console.log(values);
    axios
      .post("https://api.web3forms.com/submit", {
        access_key: values.access_key,
        name: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message,
        phoneNumber: values.contactNumber,
      })
      .then((res: any) => {
        setMessage(res.data.message);
        setError("");
      })
      .catch((e: any) => {
        setError(e.message);
        setMessage("");
      });
  };
  return (
    <div className="w-full max-w-[500px] rounded-2xl bg-[#1D1D1D] p-10">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validateSchema}
      >
        <Form className="grid gap-3">
          <InputField label="Full Name" name="fullName" />
          <InputField label="Email" name="email" type="email" />
          <InputField label="Subject" name="subject" />
          <InputField label="Contact Number(optional)" name="contactNumber" />
          <InputField label="Message" name="message" type="textarea" />
          <Button htmlType="submit">Submit</Button>
          {error ? <span className="mt-3 text-red-500">{error}</span> : ""}
          {message ? (
            <span className="mt-3 text-green-500">{message}</span>
          ) : (
            ""
          )}
        </Form>
      </Formik>
    </div>
  );
};
