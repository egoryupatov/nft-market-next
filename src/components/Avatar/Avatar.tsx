import Image from "next/image";

interface AvatarProps {
  size: number;
  isVerified: boolean;
  avatar: string;
}

export default function Avatar(props: AvatarProps) {
  return (
    <div className={props.isVerified ? "avatar__verified" : "avatar"}>
      <Image
        src={`${props.avatar}`}
        alt={"user avatar"}
        width={`${props.size}`}
        height={`${props.size}`}
      />
    </div>
  );
}
