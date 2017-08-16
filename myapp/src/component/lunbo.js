import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';

class Lunbo extends React.Component {
  state = {
    data: ['', '', ''],
    initialHeight: 200,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
  
    var imglist=this.props.imglist;
    return (
      <WingBlank>
       
        <Carousel
          className="my-carousel"
          autoplay={false}
          dots={false}
          autoplay={true}
          infinite={true}
          selectedIndex={1}
          swipeSpeed={35}
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {imglist.map(ii => (
            <a href={ii.url} key={ii} style={hProp}>
              <img
                src={ii.imageUrl}
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({
                    initialHeight: null,
                   
                  });
                }}
              />
            </a>
            
          ))}
        </Carousel>

      
      </WingBlank>
      
    );
  }
}

export default Lunbo;