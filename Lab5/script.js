const table = document.getElementById('table');
const targetCellNumber = 10;
const colorPicker = document.getElementById('colorPicker');

let cellNumber = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = cellNumber;
        cell.id = `cell-${cellNumber}`;

        if (cellNumber === targetCellNumber) {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = getRandomColor();
            });

            cell.addEventListener('click', () => {
                cell.style.backgroundColor = colorPicker.value;
            });

            cell.addEventListener('dblclick', () => {
                changeRowColors(i, j);
            });
        }

        row.appendChild(cell);
        cellNumber++;
    }
    table.appendChild(row);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeRowColors(rowIndex, startColIndex) {
    const row = table.rows[rowIndex];
    for (let i = startColIndex; i < row.cells.length; i += 2) {
        row.cells[i].style.backgroundColor = colorPicker.value;
    }
}

function validateForm() {
    const name = document.getElementById('name');
    const group = document.getElementById('group');
    const phone = document.getElementById('phone');
    const address = document.getElementById('address');
    const email = document.getElementById('email');

    // Regular expressions
    const nameRegex = /^[А-ЯІЇЄҐа-яіїєґ]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    const groupRegex = /^[А-ЯІЇЄҐа-яіїєґ]{2}-\d{2}$/;
    const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    const addressRegex = /^м\. [А-ЯІЇЄҐа-яіїєґ]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation
    let isValid = true;

    if (!nameRegex.test(name.value)) {
        name.classList.add('error');
        isValid = false;
    } else {
        name.classList.remove('error');
    }

    if (!groupRegex.test(group.value)) {
        group.classList.add('error');
        isValid = false;
    } else {
        group.classList.remove('error');
    }

    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('error');
        isValid = false;
    } else {
        phone.classList.remove('error');
    }

    if (!addressRegex.test(address.value)) {
        address.classList.add('error');
        isValid = false;
    } else {
        address.classList.remove('error');
    }

    if (!emailRegex.test(email.value)) {
        email.classList.add('error');
        isValid = false;
    } else {
        email.classList.remove('error');
    }

    if (isValid) {
        alert(`ПІБ: ${name.value}\nГрупа: ${group.value}\nТелефон: ${phone.value}\nАдреса: ${address.value}\nE-mail: ${email.value}`);
    }
}
