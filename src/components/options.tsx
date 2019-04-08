import * as React from "react"
import * as ReactDOM from "react-dom"

import 'components/options.html';
import 'styles/options.scss';

class Options extends React.Component {
  handleButtonClick = (color: string) => {
    chrome.storage.sync.set({ color }, function () {
      console.log('color is ' + color);
    })
  }

  render() {
    const buttonColors = ['green', 'red', 'yellow', 'blue' ];
    return (
      <div className="Options">
        <h1>Options</h1>

        {buttonColors.map((color) => (
          <button key={color} className={`Options-button Options-button--${color}`} onClick={() => this.handleButtonClick(color)}>
            {color}
          </button>
        ))}
      </div>
    )
  }
}

ReactDOM.render(
  <Options />,
  document.getElementById('root')
);
