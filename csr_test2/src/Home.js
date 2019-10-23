import React from "react";
import sample3 from "./sample3.jpg";
import axios from "axios";

// function Home() {
//   return (
//     <>
//       <p>wizschool</p>
//       <img src={sample3} />
//     </>
//   );
// }

// export default Home;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data, "res");
      this.setState({
        data: res.data
      });
    });
  };

  render() {
    const { data } = this.state;
    console.log(data, "data");
    const userList = data.map(user => <li key={user.id}>{user.username}</li>);
    return (
      <>
        {userList}
        <img src={sample3} />
      </>
    );
  }
}

export default Home;
