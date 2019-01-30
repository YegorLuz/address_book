import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import '../styles/form.scss';
import '../styles/filter.scss';

const Filter = props => (
    <div className="filter">
        <Input
            placeholder='filter'
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;