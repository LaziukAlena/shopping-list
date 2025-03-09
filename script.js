const inputField = document.querySelector('input');
const groceriesContainer = document.querySelector('.groceries');

inputField.addEventListener('keydown', function (event) {
    if (event.key == "Enter") {
        const grocerieName = inputField.value;
    
         if (grocerieName != '') {
            const newGrocerie = document.createElement('div');
            newGrocerie.classList.add('grocerie');
            newGrocerie.textContent = grocerieName;

            newGrocerie.addEventListener("click", function () {
                newGrocerie.classList.toggle("done");
            });
    
            groceriesContainer.append(newGrocerie);
            inputField.value = '';
        }
    }
});



/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
