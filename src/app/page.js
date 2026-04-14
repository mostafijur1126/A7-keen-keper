import Banner from "@/component/homePage/banner/Banner";
import Friends from "@/component/homePage/friends/Friends";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <Friends></Friends>
    </div>
  );
}
