import Link from "next/link";
const Nav = () => {
  return (
    <h2>
      <Link href="/home">
        <button>home</button>
      </Link>
      <Link href="/feature">
        <button>feature</button>
      </Link>
      <Link href="/image">
        <button>image</button>
      </Link>
    </h2>
  );
};

export default Nav;
