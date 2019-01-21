import React, { Component } from "react";

function Container(WrappedComponent) {
  return class MyContainer extends Component {
    componentWillReceiveProps(nextProps) {
      console.log("hash: ", nextProps);
      const { hash } = nextProps.location;
      console.log("hash: ", hash);
      if (hash && hash !== this.props.location.hash) {
        this.updateScrollPosition(hash);
      }
    }

    updateScrollPosition = hash => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          console.log("scrolling to hash: ", hash);
          element.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          element.focus();
        }
      }
    };

    render() {
      return (
        <div className="container" id="main-container" tabIndex="0">
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
}
export default Container;
