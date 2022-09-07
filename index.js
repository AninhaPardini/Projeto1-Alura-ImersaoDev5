
// let endNote = (note1STerm + note2STerm + note3STerm + note4STerm + note5STerm + note6STerm) / schoolTerms
/* Ctrl + Z - deixa o código mais compacto
Ctrl + B - minimiza aba lateral.
Ctrl + J - aparece o console
Ctrl K + Ctrl C (abrir um comentário)
Ctrl K + Ctrl U (fechar o comentário)
F2 para renomear um elemento. 
alt + shift */

function Media() {
    const note1 = document.getElementById('st1').value;
    const note2 = document.getElementById('st2').value;
    const note3 = document.getElementById('st3').value;
    const note4 = document.getElementById('st4').value;
    const note5 = document.getElementById('st5').value;
    const note6 = document.getElementById('st6').value;
    const note11 = parseFloat(note1);
    const note22 = parseFloat(note2);
    const note33 = parseFloat(note3);
    const note44 = parseFloat(note4);
    const note55 = parseFloat(note5);
    const note66 = parseFloat(note6);
    const calculate = document.getElementById('calculate');
    const result = document.getElementById('result');
    const schoolTerms = 6;
    const allnotes = note11 + note22 + note33 + note44 + note55 + note66
    const endNote = (allnotes / schoolTerms).toFixed(2)

    console.log(allnotes / schoolTerms)

    if (endNote >= 6) {
    
        result.textContent = 'Congratulations! You passed the year :) Your note is: ' + endNote

    } else {
        
        result.textContent = "Oh this is sad! You haven't passed the year :( Your note is: " + endNote
    }

}

calculate.addEventListener('click', Media);


// Varáveis, strings, console.log, toFixed, operações matemáticas, concatenação.