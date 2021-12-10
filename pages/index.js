import dynamic from "next/dynamic";

const ButtonAdd = dynamic(
  () => {
    return import("../components/button");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <ButtonAdd
        chain="0x64"
        chainName="xDai"
        symbol="xDai"
        rpc="https://rpc.xdaichain.com/"
      />
    </div>
  );
}
