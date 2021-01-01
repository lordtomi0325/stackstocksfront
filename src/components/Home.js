import React from 'react';
import axios from 'axios';
import './Home.css';
import Header from './Header';
import GoogleTrends from './GoogleTrends';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      trend: []
    };
  }
  getData = async () => {
    const {data: trend } = await axios.get("https://stackstocks.com/api");
    this.setState({trend, isLoading:false});
  }
  componentDidMount(){
    this.getData();
  }
  render() {
    const { isLoading, trend } = this.state
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
      <div className="App">
        <Header />
        <div id="trends">
          <h2><a href="https://trends.google.com/trends/trendingsearches/realtime?geo=US&category=b" target="_blank" rel="noopener noreferrer">Business Trends in US</a></h2>
          {
            trend.map((data,index) => (
              <div key={index} className="main-section">
                <div className="contents-wrapper">
                  <div className="index">{index+1}</div>
                  <div className="main-contents">
                    <span className="title">{data.title}</span>
                    <p>
                      <a className="news" href={data.summary_link} target="_blank" rel="noopener noreferrer">{data.news_title}</a>
                    </p >
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    )}
    </section>
  )}
}

export default Home;
