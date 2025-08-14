import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  clockName: string;
  hasClock: boolean;
}

export class App extends React.Component<{}, State> {
  state: State = {
    clockName: 'Clock-0',
    hasClock: true,
  };

  handleClick = () => {
    this.setState({ hasClock: true });
  };

  handleContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    this.setState({ hasClock: false });
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
    document.addEventListener('contextmenu', this.handleContextMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
    document.removeEventListener('contextmenu', this.handleContextMenu);
  }

  render() {
    return (
      <div className="App" style={{ minHeight: '100vh' }}>
        {this.state.hasClock && <Clock name={this.state.clockName} />}
      </div>
    );
  }
}
