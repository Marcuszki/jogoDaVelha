var player = "X";
var numJog = 0;

function checkjogo(id) {
    var opt = verificaSrc(id);

    if (opt === "transp.png") {
        document.getElementById(id).src = "img/" + player + ".png";
        numJog++;

        if (wincheck()) {
            alert("Aqui acabou! " + player + " ganhou!");
            return false;
        }
        if (numJog >= 9) {
            alert("Acabou, deu velha!");
            return false;
        }

        // Alterna o jogador
        player = (player === "X") ? "O" : "X";

        // Se o jogador for "O" e o PC estiver ativo
        if (player === "O" && document.getElementById('cpu').checked) {
            setTimeout(() => {
                checkjogo(jogoDoPc());
            }, 500); // Atraso para a jogada da máquina
        }
    }
}

function jogoDoPc() {
    var availableMoves = [];
    
    // Coleta todas as células vazias
    for (var i = 1; i <= 9; i++) {
        if (verificaSrc('c' + i) === "transp.png") {
            availableMoves.push('c' + i);
        }
    }

    // Se houver células disponíveis, a máquina faz uma jogada aleatória
    if (availableMoves.length > 0) {
        var randomIndex = Math.floor(Math.random() * availableMoves.length);
        return availableMoves[randomIndex];
    }
    
    // Retorna uma célula aleatória (caso todas estejam ocupadas, o que não deve acontecer)
    return 'c' + Math.floor((Math.random() * 9) + 1);
}

function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function wincheck() {
    if ((verificaSrc('c1') === verificaSrc('c2')) && (verificaSrc('c1') === verificaSrc('c3')) && verificaSrc('c1') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c4') === verificaSrc('c5')) && (verificaSrc('c4') === verificaSrc('c6')) && verificaSrc('c4') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c7') === verificaSrc('c8')) && (verificaSrc('c7') === verificaSrc('c9')) && verificaSrc('c7') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c1') === verificaSrc('c4')) && (verificaSrc('c1') === verificaSrc('c7')) && verificaSrc('c1') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c2') === verificaSrc('c5')) && (verificaSrc('c2') === verificaSrc('c8')) && verificaSrc('c2') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c3') === verificaSrc('c6')) && (verificaSrc('c3') === verificaSrc('c9')) && verificaSrc('c3') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c1') === verificaSrc('c5')) && (verificaSrc('c1') === verificaSrc('c9')) && verificaSrc('c1') !== "transp.png") {
        return true;
    }
    if ((verificaSrc('c3') === verificaSrc('c5')) && (verificaSrc('c3') === verificaSrc('c7')) && verificaSrc('c3') !== "transp.png") {
        return true;
    }
    return false;        
}
