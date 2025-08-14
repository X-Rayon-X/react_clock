import React from 'react';

function getRandomName(): string {
  const value = Date.now().toString().slice(-4);

  return `Clock-${value}`;
}

interface Props {
  name: string;
}

export class Clock extends React.Component<Props> {
  state = {
    name: this.props.name,
    today: new Date(),
  };

  timerName = 0;

  timerClock = 0;

  componentDidMount(): void {
    this.timerName = window.setInterval(() => {
      this.setState({ name: getRandomName() });
    }, 3300);

    this.timerClock = window.setInterval(() => {
      const now = new Date();

      this.setState({ today: now });
      // eslint-disable-next-line no-console
      console.log(now.toUTCString().slice(-12, -4));
    }, 1000);
  }

  componentDidUpdate(
    _prevProps: Readonly<Props>,
    prevState: Readonly<typeof this.state>,
  ): void {
    if (prevState.name !== this.state.name) {
      // eslint-disable-next-line no-console
      console.warn(`Renamed from ${prevState.name} to ${this.state.name}`);
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerName);
    window.clearInterval(this.timerClock);
  }

  render() {
    return (
      <>
        <h1>React clock</h1>

        <div className="Clock">
          <strong className="Clock__name">{this.state.name}</strong>

          {' time is '}

          <span className="Clock__time">
            {this.state.today.toUTCString().slice(-12, -4)}
          </span>
        </div>
      </>
    );
  }
}
