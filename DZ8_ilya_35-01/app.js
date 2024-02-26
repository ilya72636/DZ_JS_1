function buyTicket(button) {
    const row = button.parentNode.parentNode;
    openModal();
    document.getElementById('confirmationModal').setAttribute('data-row', row.rowIndex);
}

function openModal() {
    document.getElementById('confirmationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function confirmPurchase() {
    const rowIndex = document.getElementById('confirmationModal').getAttribute('data-row');
    const row = document.getElementById('filmsTable').rows[rowIndex];

    row.style.backgroundColor = '#ccc';
    row.cells[4].innerHTML = 'Куплено';

    closeModal();
}
