const buttonTransicao = document.getElementById('buttonTransicao');
const imgButton = document.getElementById('imgButton');
const containerHorariosDia = document.getElementsByClassName('containerHorariosDia');
const centroApps = document.getElementById('apps');
const appCentro = document.getElementById('apps-centro');
const centroInicio = document.getElementById('inicio');

buttonTransicao.addEventListener('click', () => {
    if (buttonTransicao.classList.contains('inicio')) {
        appCentro.style.visibility = 'visible';
        centroApps.style.visibility = 'visible';
        centroInicio.style.visibility = 'hidden';
        buttonTransicao.classList.remove('inicio');
        buttonTransicao.classList.add('apps');
        rodaButton();
        return;
    }
    appCentro.style.visibility = 'hidden';
    centroApps.style.visibility = 'hidden';
    centroInicio.style.visibility = 'visible';
    buttonTransicao.classList.remove('apps');
    buttonTransicao.classList.add('inicio');
    rodaButton();
});

function rodaButton() { imgButton.style.rotate = imgButton.style.rotate == '-90deg' ? '0deg': '-90deg'; }


