import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListRow extends PureComponent {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete (event) {
        event.preventDefault();
        const { data } = this.props;

        if (confirm(`Do you really want to delete ${data.get('name')} (ID: ${data.get('id')})`)) { //eslint-disable-line
            this.props.onDelete(data.get('id'));
        }
    }

    render () {
        const { data } = this.props;

        return (
            <tr>
                <td>{data.get('id')}</td>
                <td>{data.get('name')}</td>
                <td>{data.get('email')}</td>
                <td>{data.get('phone')}</td>
                <td>
                    <span className="edit-link"><Link to={`/edit-contact/${data.get('id')}`}>Edit</Link></span>
                    <a href='' className="delete-link" onClick={this.onDelete}>Delete</a>
                </td>
            </tr>
        );
    }
}

ListRow.propTypes = {
    data: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ListRow;