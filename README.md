# use-clippy

Put your clippy in your react app as hook because why not?

Seriously? Why not? Sounds like an amazing idea right? So we made it
You are welcome 🌈

Made with @walaura

## Usage

```jsx
import useClippy from 'useClippy';

function App() {
  const withClippy = useClippy('Clippy');
  return (
    <button onClick={() => withClippy(clippy => clippy.speak('SUPPP'))}>
      Clippy says
    </button>
  );
}
```

## Friends

Yes, it also supports Clippy friends ofc:

- Clippy
- Merlin
- Rover
- Link

## Animations

```js
withClippy(clippy => clippy.animate('CheckingSomething'));
```

Available Animations:

- Alert
- CheckingSomething
- Congratulate
- EmptyTrash
- Explain
- GestureDown
- GestureLeft
- GestureRight
- GestureUp
- GetArtsy
- GetAttention
- GetTechy
- GetWizardy
- GoodBye
- Greeting
- Hearing_1
- Hide
- Idle1_1
- IdleAtom
- IdleEyeBrowRaise
- IdleFingerTap
- IdleHeadScratch
- IdleRopePile
- IdleSideToSide
- IdleSnooze
- LookDown
- LookDownLeft
- LookDownRight
- LookLeft
- LookRight
- LookUp
- LookUpLeft
- LookUpRight
- Print
- Processing
- RestPose
- Save
- Searching
- SendMail
- Show
- Thinking
- Wave
- Writing

# All the methods can be seen here: https://www.smore.com/clippy-js

# License

MIT
