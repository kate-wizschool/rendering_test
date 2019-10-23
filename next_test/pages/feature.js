import Nav from "../components/nav";
class Feature extends React.Component {
  static async getInitialProps({ req }) {
    //서버측의 req
    //이 메소드는 서버,클라이언트에서 실행됨
    console.log(req, "req");
    return req ? { from: "server" } : { from: "client " };
  }

  render() {
    return (
      <div>
        <Nav />
        <p>{this.props.from} 에서 실행됨</p>
        <p>wizschool</p>
        <img src="/sample3.jpg" />
      </div>
    );
  }
}

export default Feature;
