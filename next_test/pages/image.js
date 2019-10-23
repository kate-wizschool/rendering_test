import Nav from "../components/nav";
class Image extends React.Component {
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
        <img src="/sample4.jpg" />
      </div>
    );
  }
}

export default Image;
