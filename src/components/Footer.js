import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div>
                    &copy; {new Date().getFullYear()} by Nathan Han
                </div>
            </footer>
        );
    }
}

export default Footer