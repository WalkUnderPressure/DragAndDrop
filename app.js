const items = document.querySelectorAll('.item');
const columns = document.querySelectorAll('.placeholder');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
});
function dragStart(e) {
    e.dataTransfer.setData('ITEM_ID', e.target.id);
    setTimeout(() => e.target.classList.add('hide'), 0);
    e.target.classList.add('hold');
}
function dragEnd(e) {
    e.target.classList.remove('hold', 'hide');    
}


columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', dragDrop);
});
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.target.classList.add('hovered');
}
function dragLeave(e) {
    e.target.classList.remove('hovered');
}
function dragDrop(e) {
    const itemId = e.dataTransfer.getData('ITEM_ID');
    const element = document.getElementById(itemId);
    const columnType = e.target.getAttribute('data-type');

    if (columnType === 'delete') {
        element.remove();
    }else if(columnType){
        e.target.append(element);
    }

    e.target.classList.remove('hovered');
}
