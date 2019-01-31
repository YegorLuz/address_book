import * as React from 'react';

type TProps = {
    text: string,
    onSubmit: () => void,
};

class Submit extends React.PureComponent<TProps> {
    constructor(props: TProps) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event: React.MouseEvent) {
        event.preventDefault();
        this.props.onSubmit();
    }

    render () {
        const { text } = this.props;

        return (
            <div className="button">
                <input
                    type="submit"
                    value={text}
                    onClick={this.onSubmit}
                />
            </div>
        );
    }
}

export default Submit;