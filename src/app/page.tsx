import Welcome from "@/components/Welcome/Welcome";
import Items from "@/components/Items/Items";
import items from "../data/items.json";

export default function Home() {
  return (
    <>
      <Welcome />
      <main className="content">
        <Items items={items} />
        <div className="container"></div>
      </main>
    </>
  );
}
