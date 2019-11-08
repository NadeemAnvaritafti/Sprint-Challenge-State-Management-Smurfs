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
            <h2 className='title'>Add Smurf to Database</h2>
            <form className='form' onSubmit={submitHandler}>
                <input 
                    className='input' 
                    type='text'
                    id='name' 
                    name='name' 
                    placeholder='Name' 
                    onChange={changeHandler} 
                    value={formData.name} 
                    required 
                />
                <input 
                    className='input' 
                    type='number'
                    id='age' 
                    name='age' 
                    placeholder='Age' 
                    onChange={changeHandler} 
                    value={formData.age} 
                    required 
                />
                <input 
                    className='input' 
                    type='text'
                    id='height' 
                    name='height' 
                    placeholder='Height' 
                    onChange={changeHandler} 
                    value={formData.height} 
                    required 
                />
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