const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');


function btnCriptografar() {
    const textoEncriptado = criptografar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
}

function criptografar(stringEncriptada) {
    let criptografia = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0; i < criptografia.length; i++) {
        if (stringEncriptada.includes(criptografia[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(criptografia[i][0], criptografia[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDescriptografar() {
    const textoDesencriptado = descriptografar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';
}


function descriptografar(stringDesencriptada) {
    let descriptografia = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];

    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (i = 0; i < descriptografia.length; i++) {
        if (stringDesencriptada.includes(descriptografia[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(descriptografia[i][1], descriptografia[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    const textoMensagem = mensagem.value;
    console.log(textoMensagem);
}