import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const ScreenLoader = () =>
    <div className="screen-loader">Loading...</div>;

/*
ScreenLoader.defaultProps = {
    loading: false,
};

ScreenLoader.propTypes = {
    loading: PropTypes.bool,
};

const mapStateToProps = state => ({
    loading: state.screenLoader.get('loading'),
});

export default connect(mapStateToProps, null)(ScreenLoader);
*/

export default ScreenLoader;