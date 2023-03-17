"use client";
import Image from "next/image";
import Item from "@/components/Item/Item";
import { IItem } from "@/types/item";
import { useRef, useState } from "react";

interface ItemsProps {
  items: IItem[];
}

export default function Items(props: ItemsProps) {
  const carouselRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [scrollCount, setScrollCount] = useState(0);

  console.log(position);

  //переделать

  const scrollLeft = () => {
    const newPosition = position + 360;
    carouselRef.current.style.transform = `translateX(-${newPosition}px)`;
    setPosition(newPosition);

    if (position > 720) {
      setPosition(-360);
    }
  };

  const scrollRight = () => {
    if (position <= -360) {
      setPosition(0);
    }

    const newPosition = position - 360;
    carouselRef.current.style.transform = `translateX(-${newPosition}px)`;
    setPosition(newPosition);
  };

  return (
    <div className="items">
      <div className="items__header">
        <div className="items__header__title">
          <span>Featured </span>
          Items
        </div>
        <div className="items__header__buttons">
          <button onClick={scrollRight}>
            <Image
              src={"/svg/left.svg"}
              alt={"left"}
              width={"12"}
              height={"12"}
            />
          </button>
          <button onClick={scrollLeft}>
            <Image
              src={"/svg/right.svg"}
              alt={"left"}
              width={"12"}
              height={"12"}
            />
          </button>
        </div>
      </div>
      <div className="items__content">
        <div className="items__content__wrapper" ref={carouselRef}>
          {props.items.map((item: IItem) => (
            <Item item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
