import * as React from 'react';
import classNames from 'classnames';
import ListRow from '../components/ListRow';
import '../styles/list.scss';
import { List, Map } from 'immutable';

type TProps = {
    data: List<Map<string, any>>,
    filter: string,
    onDelete: (id: string) => void,
};

type TState = {
    up: boolean,
    sorted: string,
};

class ContactsList extends React.Component<TProps> {
    state: TState
    constructor (props: TProps) {
        super(props);

        this.state = {
            up: false,
            sorted: 'id',
        };

        this.onSort = this.onSort.bind(this);
    }

    onSort (name: string) {
        const { up, sorted } = this.state;

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
                                className={classNames({ arrow: sorted === 'id' }, { '-up': up })}
                                onClick={() => this.onSort('id')}
                            >
                                ID
                            </th>
                            <th
                                className={classNames({ arrow: sorted === 'name' }, { '-up': up })}
                                onClick={() => this.onSort('name')}
                            >
                                Name
                            </th>
                            <th
                                className={classNames({ arrow: sorted === 'email' }, { '-up': up })}
                                onClick={() => this.onSort('email')}
                            >
                                Email
                            </th>
                            <th
                                className={classNames({ arrow: sorted === 'phone' }, { '-up': up })}
                                onClick={() => this.onSort('phone')}
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

export default ContactsList;