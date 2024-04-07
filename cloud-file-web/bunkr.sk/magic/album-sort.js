document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.getElementById('filterDropdown');

    function sortGrid() {
        let gridParent = document.querySelector('.grid-images');
        let boxes = Array.from(gridParent.querySelectorAll('.grid-images_box'));
        let sortedBoxes;

        switch(dropdown.value) {
            case "name-asc":
                sortedBoxes = boxes.sort((a, b) => {
                    let nameA = a.querySelector('p:nth-child(1)').textContent.trim();
                    let nameB = b.querySelector('p:nth-child(1)').textContent.trim();
                    return nameA.localeCompare(nameB);
                });
                break;
            case "name-desc":
                sortedBoxes = boxes.sort((a, b) => {
                    let nameA = a.querySelector('p:nth-child(1)').textContent.trim();
                    let nameB = b.querySelector('p:nth-child(1)').textContent.trim();
                    return nameB.localeCompare(nameA);
                });
                break;
            case "size-asc":
                sortedBoxes = boxes.sort((a, b) => {
                    let sizeA = a.querySelector('p:nth-child(2)').textContent.trim();
                    let sizeB = b.querySelector('p:nth-child(2)').textContent.trim();
                    return parseSize(sizeA) - parseSize(sizeB);
                });
                break;
            case "size-desc":
                sortedBoxes = boxes.sort((a, b) => {
                    let sizeA = a.querySelector('p:nth-child(2)').textContent.trim();
                    let sizeB = b.querySelector('p:nth-child(2)').textContent.trim();
                    return parseSize(sizeB) - parseSize(sizeA);
                });
                break;
            case "date-desc":
                sortedBoxes = boxes.sort((a, b) => {
                    let dateA = parseCustomDate(a.querySelector('p.date').textContent.trim());
                    let dateB = parseCustomDate(b.querySelector('p.date').textContent.trim());
                    return dateB - dateA;  // For descending sort
                });
                break;
            case "date-asc":
                sortedBoxes = boxes.sort((a, b) => {
                    let dateA = parseCustomDate(a.querySelector('p.date').textContent.trim());
                    let dateB = parseCustomDate(b.querySelector('p.date').textContent.trim());
                    return dateA - dateB;  // For descending sort
                });
                break;

        }

        sortedBoxes.forEach(box => {
            gridParent.appendChild(box);
        });
    }

    function parseSize(sizeStr) {
        let units = sizeStr.match(/[A-Za-z]/g).join('');
        let size = parseFloat(sizeStr);

        switch(units) {
            case "KB": return size * 1024;
            case "MB": return size * 1024 * 1024;
            case "GB": return size * 1024 * 1024 * 1024;
            default: return size;
        }
    }

    function parseCustomDate(dateStr) {
        let [time, date] = dateStr.split(' ');
        let [hour, minute, sec] = time.split(':').map(e => parseInt(e, 10));
        let [day, month, year] = date.split('/').map(e => parseInt(e, 10));
        return new Date(year, month - 1, day, hour, minute, sec);
    }

    dropdown.addEventListener('change', sortGrid);

    dropdown.value = 'date-desc';
    sortGrid();
});
