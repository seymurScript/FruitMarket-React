import React, { Component } from 'react';
import '../styles/Header.css'
import PropTypes from 'prop-types';
class Header extends Component {
    static defaultProps = {
        title: "Happy Market",
        color:'danger'
    }
    render() {
        const {title,color} = this.props
        return (
            <header className= {`container text-${color}`}>
                {title}
            </header>
        );
    }
}
export default Header;
Header.propTypes = {
    title :PropTypes.string,
    color: 'danger'||'dark'||'success'||'warning'||'info'
}