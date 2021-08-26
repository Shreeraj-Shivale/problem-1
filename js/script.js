const pressed = [];
const secretCode = 'vishwactf';

window.addEventListener('keyup', (event) => {
            pressed.push(event.key);
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
            if (pressed.join('').includes(secretCode)) {
                console.log("sugary treat, I am,... maybe answer is hidden in me!!!!");
                cornify_add();
                Processing.env.cookie
                console.log(pressed);
            }
            );