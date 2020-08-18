import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const QuestionForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', subject: '', context: '' }}
      validationSchema={Yup.object({
      name: Yup.string()
        .min(2, "Must be 2 characters or more")
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      subject: Yup.string()
        .min(5, "Must be 5 characters or more")
        .required('Required'),
      context: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert("발송이 완료되었습니다.");
          setSubmitting(false);
          axios({
            method: 'post',
            url: '/api/support',
            timeout: 4000,    // 4 seconds timeout
            data: values
          })
          .then(function (response) {
            if (response.data.redirect === '/') {
              window.location = "/"
            } else if (response.data.redirect === '/question'){
              window.location = "/question"
            }
        })
          .catch(error => console.error('timeout exceeded', error))
        }, 400);
      }}
    >
      <Form>
        <div className="text_input_area">
          <label htmlFor="name">이름</label>
          <Field name="name" type="text" />
          <div className="err_msg">
            <ErrorMessage name="name" />
          </div>
        </div>
        <div className="text_input_area">
          <label htmlFor="email">이메일</label>
          <Field name="email" type="email" />
          <div className="err_msg">
            <ErrorMessage name="email" />
          </div>
        </div>
        <div className="text_input_area">
          <label htmlFor="subject">제목</label>
          <Field name="subject" type="text" />
          <div className="err_msg">
            <ErrorMessage name="subject" />
          </div>
        </div>
        <div className="text_input_area">
          <label htmlFor="context">내용</label>
          <Field as="textarea" name="context" type="text" rows="20"/>
          <div className="err_msg">
            <ErrorMessage name="context" />
          </div>
        </div>
        <button id="submit_form" type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default QuestionForm;