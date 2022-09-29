// const tab_item = document.querySelectorAll(".tab-item");
// const tab_content_item = document.querySelectorAll(".tab-content-item");

// function selectItem(e) {
//     removeBorder();
//     removeShow();
//     this.classList.add('tab-border');
//     const tabContentItem=document.querySelector(`#${this.id}-content`);
//     tabContentItem.classList.add('show');
// }

// function removeBorder() {
//     tab_item.forEach(item=>item.classList.remove('tab-border'));
// }

// function removeShow() {
//     tab_content_item.forEach(item=>item.classList.remove('show'));
// }

// tab_item.forEach(item => item.addEventListener('click', selectItem));

const tab_item = document.querySelectorAll(".tab-item");
const tab_content_item = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
    removeBorder();
    this.classList.add('tab-border');
    removeShow();
    const tab_content_item_new=document.querySelector(`#${this.id}-content`);
    tab_content_item_new.classList.add('show');
}

function removeShow() {
    tab_content_item.forEach(item=>item.classList.remove('show'));
}

function removeBorder() {
    tab_item.forEach(item=>item.classList.remove('tab-border'));
}

tab_item.forEach(item=>item.addEventListener('click', selectItem));