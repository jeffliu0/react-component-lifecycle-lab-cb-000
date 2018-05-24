import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(){
    
  }
  
  // TODO: shouldComponentUpdate(nextProps, nextState)
  shouldComponentUpdate(nextProps, nextState){
    
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(){
    
  }
  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
