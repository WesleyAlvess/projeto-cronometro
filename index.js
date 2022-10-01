window.onload = function () {
    var segundos = 00;
    var dezenas =00;
    var acresentarDezenas = document.getElementById('dezenas');
    var acresentarSegundos = document.getElementById('segundos');
    var botaoStart = document.getElementById('button-start');
    var botaoStop = document.getElementById('button-stop');
    var botaoReset = document.getElementById('button-reset');
    var Interval ;

    botaoStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    botaoStop.onclick = function() {
        clearInterval(Interval);
    }

    botaoReset.onclick = function() {
        clearInterval(Interval);
        dezenas = "00";
        segundos = "00";
        acresentarDezenas.innerHTML = dezenas;
        acresentarSegundos.innerHTML = segundos;
    }


    function startTimer () {
        dezenas++;

        if(dezenas <= 9)
        acresentarDezenas.innerHTML = '0' + dezenas;

        if (dezenas > 9){
            acresentarDezenas.innerHTML = dezenas;
        }

        if (dezenas > 99) {
            console.log(segundos);
            segundos++;
            acresentarSegundos.innerHTML = '0' + segundos;
            dezenas = 0;
            acresentarDezenas.innerHTML = '0' + 0;
        }

        if (segundos > 9){
            acresentarSegundos.innerHTML = segundos;
        }
    }
}