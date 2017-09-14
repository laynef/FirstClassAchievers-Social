import React from 'react';


export const renderIconInput = ({input, placeholder='', icon, type, cname}) => (
	<div className={`input-group mb-${cname}`}>
		<span className="input-group-addon">
			<i className={icon}></i>
		</span>
		<input {...input} type={type} className="form-control" placeholder={placeholder} />
	</div>
);

export const renderInput = ({input, label, cname='', id='', placeholder=''}) => (
	<div className={`form-group ${cname}`}>
		<label>{label}</label>
		<input {...input} type="text" className="form-control" id={id} placeholder={placeholder}/>
	</div>
);

export const renderTextarea = ({input, label, id='', placeholder=''}) => (
	<div className={`form-group`}>
		<label>{label}</label>
		<textarea {...input} type="text" className="form-control" id={id} placeholder={placeholder}/>
	</div>
);

export const renderDateInput = ({input, label}) => (
	<fieldset className="form-group">
		<label>{label}</label>
		<div className="input-group">
			<span className="input-group-addon">
				<i className="fa fa-calendar"></i>
			</span>
			<input {...input} type="text" className="form-control" id="date" />
		</div>
		<small className="text-muted">ex. 99/99/9999</small>
	</fieldset>
);

export const textInput = ({input, placeholder="Leave a comment..."}) => (
	<input {...input} type="text" placeholder={placeholder} style={{width: '100%', outline: 'none', padding: '5px 10px'}}/>
);

export const textNameInput = ({input, placeholder="Leave a comment..."}) => (
	<input {...input} type="text" placeholder={placeholder} className="" id="white-placeholder" style={{width: '325px', right: '36%', top: '5px', height: '40px', position: 'absolute', backgroundColor: 'transparent', color: 'white', fontSize: '24px', border: 'none'}}/>
);

export const radioInput = ({input, label, checked=false, click}) => (
	<div className="radio" onClick={click}>
		<label>
			<input {...input} checked={checked} type="radio" style={{marginRight: '5px'}} /> {label}
		</label>
	</div>
);
