import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ListRow from '../components/ListRow';
import '../styles/list.scss';

class ContactsList extends Component {
    constructor (props) {
        super(props);

        this.state = {
            up: false,
            sorted: 'id',
        };

        this.onSort = this.onSort.bind(this);
    }

    onSort (event) {
        const { up, sorted } = this.state;
        const name = event.target.getAttribute('name');

        if (sorted === name) {
            this.setState({
                up: !up,
            });
        } else {
            this.setState({
                sorted: name,
                up: false,
            });
        }
    }

    render () {
        const { data, filter } = this.props;
        const { sorted, up } = this.state;

        if (data.size) {
            const list = data
                .filter(item => {
                    if (!filter) {
                        return true;
                    }

                    return item.get('name').indexOf(filter) >= 0
                        || item.get('email').indexOf(filter) >= 0
                        || item.get('phone').indexOf(filter) >= 0;
                })
                .sort((item1, item2) => {
                    const value1 = sorted === 'id' ? parseInt(item1.get(sorted)) : item1.get(sorted);
                    const value2 = sorted === 'id' ? parseInt(item2.get(sorted)) : item2.get(sorted);
                    if (up) {
                        return value1 > value2 ? -1 : 1;
                    }

                    return value1 < value2 ? -1 : 1;
                })
                .map(item => <ListRow
                    key={item.get('id')}
                    data={item}
                    onDelete={this.props.onDelete}
                />);

            return (
                <table className="contact-list">
                    <thead>
                        <tr>
                            <th
                                name='id'
                                className={classNames({ arrow: sorted === 'id' }, { '-up': up })}
                                onClick={this.onSort}
                            >
                                ID
                            </th>
                            <th
                                name='name'
                                className={classNames({ arrow: sorted === 'name' }, { '-up': up })}
                                onClick={this.onSort}
                            >
                                Name
                            </th>
                            <th
                                name='email'
                                className={classNames({ arrow: sorted === 'email' }, { '-up': up })}
                                onClick={this.onSort}
                            >
                                Email
                            </th>
                            <th
                                name='phone'
                                className={classNames({ arrow: sorted === 'phone' }, { '-up': up })}
                                onClick={this.onSort}
                            >
                                Phone
                            </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            );
        }

        return null;
    }
}

ContactsList.propTypes = {
    data: PropTypes.object.isRequired,
    filter: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default ContactsList;