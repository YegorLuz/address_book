import * as React from 'react';
import { connect } from 'react-redux';

interface ScreenLoaderProps { loading: boolean; };

const ScreenLoader = (props: ScreenLoaderProps) => {
	const { loading } = props;

	if (loading) {
		return (
			<div className="screen-loader">Loading...</div>
		);
	}

	return null;
};

type stateTypes = {
    screenLoader: object,
};

const mapStateToProps = (state: stateTypes) => ({
	loading: state.screenLoader,
});

export default connect(mapStateToProps, null)(ScreenLoader);