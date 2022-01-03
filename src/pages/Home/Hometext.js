import React, { Component } from "react";
import "./Home.css"
import ReactTextTransition, { presets } from "react-text-transition";


const texts = ["Fast", "Scalable", "Potato"];



class Hometext extends Component {
  state = {
    textIndex: 0,
    textFastIndex: 0,
  };

  componentUpdateMount() {
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1
      });
    }, 1000);
  }

  render() {
    return (
      <React.Fragment>
       
        <section>
          <section className="Homeanimation">
            <span className="Homeanimationtextleft">I will create</span>
            <ReactTextTransition className="Homeanimationtextmiddle"
              text={texts[this.state.textFastIndex % texts.length]}
              springConfig={presets.gentle}
              style={{ margin: "0 6px" }}
              inline
              overflow
            />
            <span className="Homeanimationtextright">Web Application for you.....</span>
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Hometext;
