import Image from "next/image";
import Searchbar from "@/components/Searchbar/Searchbar";

export default function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <div className="welcome__text__subtitle">WELCOME TO CRYPTOBIT</div>
        <div className="welcome__text__title">
          Browse the Best Digital Products!
        </div>
      </div>
      <div className="welcome__search">
        <Searchbar />
      </div>
    </div>
  );
}
