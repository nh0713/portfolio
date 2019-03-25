import React, { Component } from 'react';
import '../App.css';

import textbookFriends from '../images/textbookFriends.PNG';
import grailz from '../images/grailz.png';
import attFriends from '../images/attFriends.png';
import shredderz from '../images/shredderz.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import posed from 'react-pose';


// const Box = posed.div({
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 }
// });

// class AnimationTest extends Component {
//     state = { isVisible: true };

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({ isVisible: !this.state.isVisible});
//         }, 1000);
//     }

//     render() {
//         const { isVisible } = this.state;
//         return <Box 
//                 className="box" 
//                 pose={this.state.isVisible ? 'visible' : 'hidden'}
//                 />;
//     }
// }

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimationTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }
  
    render() {
      const items = this.state.items.map((item, i) => (
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
      ));
  
      return (
        <div>
          <button onClick={this.handleAdd}>Add Item</button>
          {/* <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
  
            {items}
          </ReactCSSTransitionGroup> */}
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}
                delay={500}>
                <h1>Fading at Initial Mount</h1>
            </ReactCSSTransitionGroup>
        </div>
      );
    }
  }

export default AnimationTest;