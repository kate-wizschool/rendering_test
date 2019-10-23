import Link from "next/link";
import Nav from "../components/nav";
import Head from "next/head";

class Index extends React.Component {
  static async getInitialProps({ req }) {
    //서버측의 req
    //이 메소드는 서버,클라이언트에서 실행됨
    console.log(req, "req");
    return req ? { from: "server" } : { from: "client " };
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Nav />
        <p>{this.props.from} 에서 실행됨</p>
      </div>
    );
  }
}

export default Index;
