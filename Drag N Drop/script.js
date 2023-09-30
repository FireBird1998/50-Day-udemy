const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);

fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}



function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragEnter() {
    this.style.transform = 'scale(1.1)';
    console.log('enter');
}

function dragLeave() {
    this.className = 'empty';
    this.style.transform = 'scale(1)';
    
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
    this.style.transform = 'scale(1)';
    
}


