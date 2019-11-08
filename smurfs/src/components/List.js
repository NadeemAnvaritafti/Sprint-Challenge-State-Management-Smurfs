import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {fetchData} from '../actions';

import Card from './Card';

const List = props => {

    useEffect(()=> {
        props.fetchData();
    }, []);

    if (props.isFetching) {
        return <h3>Loading Smurf Data...</h3>
    }

    return (
        <div className='nbalist'>
            {props.error && <p>{props.error}</p>}
            {props.smurfData.map(smurf => (
                <Card key={smurf.id} smurf={smurf}/>
            ))}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        smurfData: state.smurfData,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchData })(List);