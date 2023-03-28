import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';
import 'material-icons/iconfont/material-icons.css';

const passwordBtnEl = document.querySelector('button');
const displayPasswordEl = document.querySelector('h2');
const clickBoardEl = document.querySelector('.material-icons');

passwordBtnEl.addEventListener('click', () => {
    const randomPassword = nanoid();
    displayPasswordEl.innerHTML = randomPassword;
    clickBoardEl.style.cursor = 'pointer';
    clickBoardEl.innerHTML = 'content_copy';
    clickBoardEl.style.display = 'inline';
});

clickBoardEl.addEventListener('click', () => {
    copy(displayPasswordEl.innerHTML);
    clickBoardEl.innerHTML = 'library_add_check';
    clickBoardEl.style.cursor = 'not-allowed';
});