import dynamic from "next/dynamic";

const HomeChain = dynamic(
  () => {
    return import("../components/button");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <HomeChain />
    </div>
  );
}
