import React from "react";

class AboutUsClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userinfo: {
        name: "",
        avatar_url: "",
        location: "",
      },
      count: 0,
      count2: 2,
    };
    console.log("Parent : Called from constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SRINIVASAKUMSI");
    const json = await data.json();
    console.log(json);

    this.setState({
      userinfo: json,
    });
    console.log("Parent : Called from componentDidMount");
    console.log(this.state.userinfo);
  }

  render() {
    console.log("Parent : Called from render");
    return (
      <div className="min-h-[580]">
        <h2 className="bg-violet-400 min-h-[40] px-3 py-2 justify-items-center text-white font-bold">
          This is About Page using Class
        </h2>
        <div className="flex px-4 py-2">
          <img src={this.state.userinfo.avatar_url}></img>
          <div className="justify-between px-3">
            <h3 className="font-bold">Name : {this.state.userinfo.name}</h3>
            <h3>Place : {this.state.userinfo.location}</h3>
            <br />
            <br />
          </div>
        </div>
        <br />
        <br />
        <h3 className="font-bold">Class Playground</h3>
        <h3>Count : {this.state.count}</h3>
        <h3>Count 2 : {this.state.count2}</h3>
        <button
          className="bg-orange-400"
          onClick={() => {
            this.setState({ count: 1, count2: 4 });
          }}
        >
          Count
        </button>
      </div>
    );
  }
}

export default AboutUsClass;

export class AbhoutChild1 extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props + ": Called from constructor");
  }

  componentDidMount() {
    //console.log(this.props + ": Called from componentDidMount");
  }

  render() {
    //console.log(this.props + ": Called from render");
    return (
      <div>
        <h1 className="font-bold text-red-700">this is child Component</h1>
        {/* <h2>{this.props}</h2> */}
        <h2></h2>
        <h2></h2>
      </div>
    );
  }
}

export class AbhoutChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ChildCount: 0,
    };

    console.log(this.props.name + ": Called from constructor");
  }

  componentDidMount() {
    console.log(this.props.name + ": Called from componentDidMount");
  }

  render() {
    console.log(this.props.name + ": Called from render");
    return (
      <div>
        <h1 className="font-bold text-red-700">this is child Component</h1>
      </div>
    );
  }
}
