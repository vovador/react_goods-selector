import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList/GoodList';

class App extends React.Component {
  state = {
    selectedGood: [],
  }

  setGood = (value) => {
    this.setState(prevState => (
      { selectedGood: [...prevState.selectedGood, value] }));
  };

  removeSelection = (value) => {
    this.setState(prevState => ({ selectedGood: value }));
  };

  render() {
    return (
      <div className="App">
        <h1>
          Selected good:
          {' '}
          {this.state.selectedGood.join(',')}
        </h1>
        <button
          type="button"
          onClick={() => this.setState({ selectedGood: [] })}
        >
          X
        </button>
        <GoodList
          setGood={this.setGood}
          selectedGood={this.state.selectedGood}
          removeSelection={this.removeSelection}
        />
      </div>
    );
  }
}

export default App;
