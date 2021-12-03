const target = document.querySelector('.account-type');

let labelMap = {
    'business': document.querySelector('label[for="business"]'),
    'applicant': document.querySelector('label[for="applicant"]'),
};

// default selected
// let curSelected = labelMap['business'];
let selectedInput = document.querySelector('input:checked');
let curSelectedValue = selectedInput && selectedInput.value;
let curSelected = labelMap[curSelectedValue];
if (curSelected) { curSelected.classList.toggle('selected'); };

if (target) {
    target.addEventListener('click', e => {
        const target = e.target;

        if (target.tagName === 'INPUT') {
            labelMap[target.id].classList.toggle('selected');
            curSelected.classList.toggle('selected');

            curSelected = labelMap[target.id];
        } if (target.tagName === 'LABEL') {
            target.classList.toggle('selected');
            curSelected.classList.toggle('selected');

            curSelected = target;
        }
    });
};
