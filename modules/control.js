import {input, paragraph} from './createElements.js';

const paragraphSetContent = () => {
  paragraph.textContent = input.value;
};

const timeoutControl = () => {
  setTimeout(paragraphSetContent, 3000);
};

export const inputControl = () => {
  input.addEventListener('blur', timeoutControl);
  clearTimeout(timeoutControl);
};
