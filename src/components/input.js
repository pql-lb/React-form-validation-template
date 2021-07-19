import React from 'react';
import './style.css';

// inputs.forEach(input => {
//     input.addEventListener('click', (e) => {
//         input.classList.add('clicked');
//     })
//     input.addEventListener('change', (e) => {
//         if (!e.target.validity.valid) {
//             input.classList.add('alertShow');
//         } else {
//             input.classList.remove('alertShow')
//         }
//     })
//     input.addEventListener('focusout', (e) => {
//         if (!e.target.validity.valid) {
//             input.classList.add('alertShow');
//         } else {
//             input.classList.remove('alertShow')
//         }
//     })
// })

class Input extends React.Component {
    state = {
        click: false, valid: false
    }
    handleClick = (e) => {
        this.setState({
            click: true,
            valid: e.target.validity.valid
        })
    }
    handleBlur = (e) => {
        this.setState({
            valid: e.target.validity.valid
        })
    }
    render() {
        const {click, valid} = this.state;
        const {label, name, required, size, type, handleChange, value} = this.props;
        return (
            <React.Fragment>
                <div className="col">
                    <div className={click ? `input ${size} clicked` : `input ${size}`}>
                        <label>{label}</label>
                        <input
                        onClick={this.handleClick}
                        onBlur={this.handleBlur}
                        onChange={handleChange}
                        value={value}
                        type={type}
                        name={name}
                        required={required}
                        ></input>
                        <div className={!valid && click ? 'alertShow' : 'alert'}>This field is required.</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Input;