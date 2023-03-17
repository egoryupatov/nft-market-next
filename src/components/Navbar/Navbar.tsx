import Image from "next/image";
import Link from "next/link";
import { INavLink } from "@/types/navLink";
import authorizedUser from "../../data/authorizedUser.json";
import Avatar from "@/components/Avatar/Avatar";

export default function Navbar() {
  const navLinks = [
    {
      title: "Home",
      alias: "/",
      isDropdown: false,
    },
    {
      title: "Explore",
      alias: "/explore",
      isDropdown: true,
    },
    {
      title: "Creators",
      alias: "/creators",
      isDropdown: false,
    },
    {
      title: "Collectors",
      alias: "/collectors",
      isDropdown: false,
    },
    /*  {
      title: "Product",
      alias: "/product",
      isDropdown: true,
    },
    {
      title: "All pages",
      alias: "/all",
      isDropdown: true,
    },
    {
      title: "Blog",
      alias: "/blog",
      isDropdown: true,
    },*/
  ];

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__left__logo">
          <Image
            src={"/svg/logo.svg"}
            alt={"logo"}
            width={"40"}
            height={"40"}
          />
          <span>CryptoBit</span>
        </div>
        <div className="navbar__left__menu">
          <nav className="navbar__left__menu__links">
            <ul>
              {navLinks.map((link: INavLink) => (
                <li key={link.title}>
                  <Link href={link.alias}>{link.title}</Link>
                  {link.isDropdown ? (
                    <Image
                      src={"/svg/down.svg"}
                      alt={"drop down"}
                      width={"16"}
                      height={"16"}
                    />
                  ) : null}
                </li>
              ))}
            </ul>
            <Image
              src={"/svg/three-dots.svg"}
              alt={"more"}
              width={"16"}
              height={"16"}
            />
          </nav>
        </div>
      </div>
      <div className="navbar__right">
        <div className="navbar__right__activities">
          <Image
            src={"/svg/search.svg"}
            alt={"search"}
            width={"17"}
            height={"17"}
          />
          <Image
            src={"/svg/cart.svg"}
            alt={"search"}
            width={"24"}
            height={"24"}
          />
          <Image
            src={"/svg/hearth.svg"}
            alt={"search"}
            width={"24"}
            height={"24"}
          />
          <Image
            src={"/svg/bell.svg"}
            alt={"search"}
            width={"24"}
            height={"24"}
          />
        </div>
        <div className="navbar__right__divider" />
        <div className="navbar__right__user">
          <div className="navbar__right__user__info">
            <div className="navbar__right__user__info__username">
              {authorizedUser.username}
            </div>
            <div className="navbar__right__user__info__balance">
              {authorizedUser.balance} ETH
            </div>
          </div>

          <Avatar
            avatar={authorizedUser.avatar}
            isVerified={authorizedUser.isVerified}
            size={36}
          />
        </div>
      </div>
    </div>
  );
}
