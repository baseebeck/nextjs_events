import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className="headerContainer">
        <div className="topNav">
          <Image
            src={"/images/bs_logo.png"}
            width={50}
            height={50}
            alt="logo"
          />
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/events">Events</Link>
              </li>
              <li>
                <Link href="/about-us">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title">Events Next.js App</p>
      </div>
    </header>
  );
};

export default Header;
