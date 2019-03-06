import * as React from "react"
import * as ReactDOM from "react-dom"

import "../styles/popup.scss"

interface IState {
  color?: string;
}

class PopUp extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    chrome.storage.sync.get('color', (data) => {
      const { color } = data;

      this.setState({
        color,
      });
    });

    this.state = {
      color: undefined,
    };
  }

  handleButton = (color: string) => {
    console.log('changeColor', color);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.executeScript(
        // @ts-ignore
        tabs[0].id,
        { code: 'document.body.style.backgroundColor = "' + color + '";' });
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="PopUp">
        <h1>PopUp</h1>

        {!color && (
          <p>Loading...</p>
        )}

        {color && (
          <button className={`PopUp-button PopUp-button--${color}`} onClick={() => this.handleButton(color)}>Press Me!</button>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <PopUp />,
  document.getElementById('root')
);
