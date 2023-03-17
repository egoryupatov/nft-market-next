import { IItem } from "@/types/item";
import Image from "next/image";
import Avatar from "@/components/Avatar/Avatar";

interface ItemProps {
  item: IItem;
}

export default function Item(props: ItemProps) {
  return (
    <div className="item">
      <div className="item__content">
        <div className="item_content__image">
          <Image
            src={`${props.item.image}`}
            alt={"item image"}
            height={"340"}
            width={"308"}
          />
        </div>
        <div className="item_content__info">
          <div className="item_content__info__name">{props.item.name}</div>
          <div className="item_content__info__user">
            <div className="item_content__info__user__avatar">
              <Avatar
                size={24}
                isVerified={props.item.user.isVerified}
                avatar={props.item.user.avatar}
              />
            </div>
            <div className="item_content__info__user__username">
              @{props.item.user.username}
            </div>
          </div>
        </div>
      </div>
      <div className="item__bids">
        <div className="item__bids__info">
          <div className="item__bids__info__current">CURRENT BID</div>
          <div className="item__bids__info__bid">{props.item.price} ETH</div>
        </div>
        <div className="item__bids__button">
          <button>Place a Bid</button>
        </div>
      </div>
    </div>
  );
}
