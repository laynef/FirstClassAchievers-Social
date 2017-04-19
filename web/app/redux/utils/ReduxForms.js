import React, { Component } from 'react'


export const renderReqInput = ({input, label, help='', type, meta: {touched, error}}) => (
	<div className="form-group">
		  <label>{label}</label>
		  <span className="help">{help}</span>
		  <input {...input} type={type} className="form-control" required/>
	</div>
)

export const renderInput = ({input, label, help='', type, meta: {touched, error}}) => (
	<div className="form-group">
		  <label>{label}</label>
		  <span className="help">{help}</span>
		  <input {...input} type={type} className="form-control"/>
	</div>
)

export const renderTextArea = ({input, label, help='', meta: {touched, error}}) => (
	<div className="form-group">
		<label for="name" className="col-md-8 control-label">{label}</label>
		<div className="col-md-12">
			<textarea {...input} className="form-control" id="name" placeholder={help} aria-invalid="false" />
		</div>
	</div>
)
