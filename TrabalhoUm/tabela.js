document.addEventListener('DOMContentLoaded', function() {
    const addRowBtn = document.getElementById('addRowBtn');
    const saveRowsBtn = document.getElementById('saveRowsBtn');
    const tableBody = document.querySelector('#nameTable tbody');

    const savedData = localStorage.getItem('nameData');
    if (savedData) {
        const jsonData = JSON.parse(savedData);
        jsonData.forEach(name => addRow(name));
    }

    addRowBtn.addEventListener('click', function() {
        const newName = prompt('Insira um nome:');
        if (newName !== null && newName.trim() !== '') {
            addRow({ name: newName });
        }
    });

    saveRowsBtn.addEventListener('click', function() {
        const tableRows = tableBody.querySelectorAll('tr');
        const data = [];
        tableRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const name = cells[0].textContent;
            data.push({ name });
        });
        const jsonData = JSON.stringify(data);
        localStorage.setItem('nameData', jsonData);
        alert('Nomes salvos com sucesso!');
    });

    function addRow(data) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${data ? data.name : ''}</td>
        `;
        tableBody.appendChild(newRow);
    }
});