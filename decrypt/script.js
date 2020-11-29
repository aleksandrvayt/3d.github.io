const button = document.querySelector('#decriptButton');

const edwardDecrypt = (message) => {
  const stack = [];
  const arr = message.toLowerCase().split('');
  let letter = undefined;
  let skip = false;

  for (let i = 0; i < arr.length; i++) {
    if (stack.length > 0 && !skip) {

      if (arr[i] !== letter) {
        stack.push(arr[i]);
        skip = false
      } else {
        stack.pop();
        skip = true;
      }

    } else {
      stack.push(arr[i]);

      skip = false
    }

    letter = arr[i];
  }

  return stack.join('');
}

const handleClick = () => {
  const encryptedInput = document.querySelector('#encryptedInput');
  const decryptedInput = document.querySelector('#decryptedInput');

  decryptedInput.value = edwardDecrypt(encryptedInput.value);
}

button.addEventListener('click', handleClick);
