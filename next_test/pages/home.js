import Nav from "../components/nav";
import axios from "axios";

class Home extends React.Component {
  static async getInitialProps({ req }) {
    //서버측의 req
    //이 메소드는 서버,클라이언트에서 실행됨

    // const data = `특정 페이지에 대한 즐겨찾기 등록이 불가합니다. 컴포넌트가
    // 전환되더라도 브라우저 주소창의 URL은 고정되어 있기 때문입니다.
    // 뒤로 가기 버튼을 누르면 해당 앱내에서 이전 페이지로 이동하는 것이
    // 아니라 그 전에 서핑하던 다른 웹사이트로 이동해버립니다. 새로 고침
    // 버튼을 누르면 사용 중이던 컴포넌트가 아닌 무조건 최초에
    // 렌더링되었던 Home 컴포넌트로 이동합니다.`;
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return req
      ? { from: "server", data: response.data }
      : { from: "client ", data: response.data };
  }

  render() {
    const { data } = this.props;
    console.log(data, "data");
    const userList = data.map(user => <li key={user.id}>{user.username}</li>);

    return (
      <div>
        <Nav />
        <p>{this.props.from} 에서 실행됨</p>
        {userList}
        <img src="/sample3.jpg" />
      </div>
    );
  }
}

export default Home;
