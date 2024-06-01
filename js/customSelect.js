let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    let selectIcon = document.querySelector('.select__icon');
    let selectBody = document.querySelector('.select__body');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
        selectIcon.classList.add('act');
        selectBody.classList.add('act');
    }

    function selectChoose() {
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
        selectIcon.classList.remove('act');
        selectBody.classList.remove('act');
    }

};

select();