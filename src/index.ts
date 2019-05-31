import 'jquery';
import clippyjs from 'clippyjs';
import { useEffect, useState } from 'react';

type Agents = 'Clippy' | 'Merlin' | 'Links' | 'Rover';

const useClippy = (human: Agents = 'Clippy') => {
  const [clippy, setClippy] = useState(null);
  const [updatedClippy, setUpdatedClippy] = useState([0, () => { }]);

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

export default useClippy;
