import {body} from './getElements.js';
import {input, paragraph} from './createElements.js';

export const renderBody = () => {
  body.append(input);
  body.append(paragraph);
};
