import React, { Component } from 'react';
import giphy, { Component } from 'giphy-api';

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "xH5BcIp3JKuyc"
    }
  }

  search = (query) => {
    giphy('32AOZlhHXivxavz92YtYaE0YdryPr2Lw').search({
      q: query,
      rating: 'g'
      }, function (err, res) {
        console.log(res);
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    );
  }
}


export default App
