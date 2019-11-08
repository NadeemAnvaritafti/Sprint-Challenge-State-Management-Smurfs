import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';



const Form = (props) => {

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        height: ''
    })

    const changeHandler = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        props.addSmurf(formData);
        setFormData({
            name: '',
            age: '',
            height: ''
        })
    }
    
    return (
        <div className='container'>
            <h2 className='title'>Add Smurf</h2>
            <form className='form' onSubmit={submitHandler}>

                <label className='label'>Name: 
                <input 
                    className='input' 
                    type='text' 
                    name='name' 
                    placeholder='Name' 
                    onChange={changeHandler} 
                    value={formData.name} 
                    required 
                />
                </label>

                <label className='label'>Age:
                <input 
                    className='input' 
                    type='number' 
                    name='age' 
                    placeholder='Age' 
                    onChange={changeHandler} 
                    value={formData.age} 
                    required 
                />
                </label>
                
                <label className='label'>Height:
                <input 
                    className='input' 
                    type='text' 
                    name='height' 
                    placeholder='Height' 
                    onChange={changeHandler} 
                    value={formData.height} 
                    required 
                />
                </label>
              
                <div>
                <button className='button' type='submit'>Add Smurf</button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        error: state.error
    }
}
export default connect(mapStateToProps, {addSmurf})(Form);