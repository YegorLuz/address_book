import * as React from 'react';
import Input from './Input';
import '../styles/form.scss';
import '../styles/filter.scss';

type IProps = {
    value: string,
    onChange: (value: string, name?: string) => void
};

const Filter = (props: IProps) => (
    <div className="filter">
        <Input
            placeholder='filter'
            value={props.value}
            onChange={props.onChange}
        />
    </div>
);

export default Filter;