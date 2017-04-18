import React, { Component } from 'react'


export const renderInput = ({input, label, help='', type, meta: {touched, error}}) => (
	<div className="form-group">
		  <label>{label}</label>
		  <span className="help">{help}</span>
		  <input {...input} type={type} className="form-control" />
	</div>
)
