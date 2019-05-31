import "jquery";
import clippyjs from "clippyjs";
import styles from "./style";
import { useEffect, useState } from "react";

type Agents = "Clippy" | "Merlin" | "Links" | "Rover";

export const useClippy = (human: Agents = "Clippy") => {
  const [clippy, setClippy] = useState(null);
  const [updatedClippy, setUpdatedClippy] = useState([0, () => { }]);

  useEffect(() => {
    const linkElement = document.createElement("style");
    linkElement.innerHTML = styles.trim();

    document.getElementsByTagName("head")[0].appendChild(linkElement);
  }, []);

  useEffect(() => {
    clippyjs.load(human, (agent: any) => {
      agent.show();
      setClippy(agent);
    });
  }, [human]);

  useEffect(() => {
    // @ts-ignore
    updatedClippy[1](clippy);
  }, [updatedClippy[0]]);

  return (cb: any) => {
    setUpdatedClippy(([count]: any) => [count + 1, cb]);
  };
};
