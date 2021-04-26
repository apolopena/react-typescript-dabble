import React from 'react'

export default function Form({ children, ...restProps }) {
  return <div {...restProps} >{children}</div>
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <form {...restProps}>{children}</form>
}

Form.Error = function FormError({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <div {...restProps}>{children}</div>
}

Form.Input = function FormInput({ children, ...restProps }) {
  return <input {...restProps}>{children}</input>
}

Form.TextArea = function FormInput({ children, ...restProps }) {
  return <textarea {...restProps}>{children}</textarea>
}

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <button {...restProps}>{children}</button>
}
