const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', (event) => {
  pressed.push(event.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // gets us the length by working backwards
  if(pressed.join('').includes(secretCode)) {
    console.log("C0n$01E_ME$$@GES_ARE_FUNNY");
    cornify_add();
  }
  console.log(pressed);
});