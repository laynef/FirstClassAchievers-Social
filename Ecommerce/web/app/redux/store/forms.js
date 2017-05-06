import React, { Component } from 'react'


export const renderInput = ({input, label, placeholder='', type, meta: {touched, error}}) => (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <input {...input} type={type} className="form-control" placeholder={placeholder} />
    </div>
)