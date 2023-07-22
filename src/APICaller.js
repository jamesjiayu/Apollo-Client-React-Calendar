import React, { Component } from 'react';
const url = `https://www.reddit.com/r/reactjs.json`;

export default class APICaller extends Component {
  callApi() {
    fetch(url)
      .then((result) => result.json())
      .then((jsonData) => console.log(jsonData));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.callApi()}>Call the API now</button>
      </div>
    );
  }
}
/*
v 16
React.render(
  // <APICaller />
  document.getElementById('myaplicaller')
);
*/
