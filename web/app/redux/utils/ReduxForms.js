import React, { Component } from 'react'


export const renderInput = ({input, label, placeholder='', help='', type, meta: {touched, error}}) => (
	<div className="form-group">
		  <label>{label}</label>
		  <span className="help">{help}</span>
		  <input {...input} type={type} placeholder={placeholder} className="form-control"/>
	</div>
)

export const renderTextArea = ({input, label,  placeholder='', meta: {touched, error}}) => (
	<div className="form-group">
		<label htmlFor="name" className="control-label">{label}</label>
		<div>
			<textarea {...input} className="form-control" id="name" placeholder={placeholder} aria-invalid="false" />
		</div>
	</div>
)

