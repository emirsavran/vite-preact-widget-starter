import { useEffect, useState } from "preact/hooks";
import "./app.css";
import Profile from "./Profile";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

window.app = {};

export function App() {
  const [name, setName] = useState("");
  const client = createClient({
    autoConnect: true,
    provider: getDefaultProvider(),
  });

  useEffect(() => {
    window.app.setName = setName;
    return () => (window.app.setName = undefined);
  }, []);

  return (
    <>
      <WagmiConfig client={client}>
        <h1>Hello {name}</h1>
        <Profile />
      </WagmiConfig>
    </>
  );
}
