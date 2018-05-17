import React, { Component } from 'react';
import { Button, Icon, Popup, Input } from 'semantic-ui-react'
import './App.css';
import Fact from './Fact';

class App extends Component {
  state = {
    facts: [
      { 
        factTitle: 'The Candy Bar Strike',
        factContent: 'In 1947, after the price of a chocolate bar increased from 5 cents to 8 cents, 200 kids marched and protested on the capitol building in British Columbia, shutting down the government for a day.',
        totalLikes: 215,
        totalDislikes: 12
      }
    ]
  };
  
  renderFacts() {
    return (
      this.state.facts.map((fact) => {
        return(
          <Fact
            factTitle={fact.factTitle}
            factContent={fact.factContent}
            totalLikes={fact.totalLikes}
            totalDislikes={fact.totalDislikes}
          />
        );
      })
    );
  }

  renderAddFactForm() {
    return (
      <div>
        <div className="add-fact-form-title">Add new fact</div>
        <Input placeholder='Fact title...' />
      </div>
    );
  }

  addFact() {
    console.log("AAA");
  }

  renderAddFactButton = 
    <Button 
        className="addFactButton"
        circular 
        color="facebook" 
        icon='plus' 
        onClick={this.addFact}
      />

  render() {
    return (
      <div className="container">
        <div className="add-fact-button">
          <Popup
            className="factPopup"
            on='click'
            trigger={this.renderAddFactButton}
            content={this.renderAddFactForm()}
            position='bottom right'
          />
        </div>
        {this.renderFacts()}
        <div className="shade">asdf</div>
      </div>
    );
  }
}

export default App;
