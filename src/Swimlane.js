import React from 'react';
import Card from './Card';
import './Swimlane.css';
// import Dragula from 'dragula';


export default class Swimlane extends React.Component {

  // componentDidMount() {
  //   const container = React.findDOMNode(this);
  //   dragula([container]);
  // }

  render() {
    const cards = this.props.clients.map(client => {
      return (
        <Card
          key={client.id}
          id={client.id}
          name={client.name}
          description={client.description}
          status={client.status}
        />
      );
    })
    return (
      <div className="Swimlane-column" id={this.props.name}>
        <div className="Swimlane-title">{this.props.name}</div>
        <div className="Swimlane-dragColumn" ref={this.props.dragulaRef}>
          {cards}
        </div>
      </div>);
  }


  // dragulaDecorator = (componentBackingInstance) => {
  //   if (componentBackingInstance) {
  //     let options = { };
  //     Dragula([componentBackingInstance], options);
  //   }
  // }
}
