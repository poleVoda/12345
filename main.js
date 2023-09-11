

{// start
    // JSON 
    let R = new XMLHttpRequest;
    R.open('GET', 'round.json');
    R.send();
    R.onload = () => { round = JSON.parse(R.responseText); game(); }; // запускаем функцию game после загрузки иначе нихуя не будет работать
    // JSON

    let audio = new Audio(); // переменная для звуков
    // Музыка
    function music1(m) {
        audio.src = m
        audio.autoplay = true
      }

    // начать регистрацию
    function startRegistration() {
        document.getElementById('start').style.zIndex = -1;
        music1('intro.mp3')
    }

    // закрыть меню регистрации
    function registrationComplite() {
        let name1=commandName1.value;
        let name2=commandName2.value;
        let name3=commandName3.value;
        document.getElementById('hello').style.zIndex = -10;
        game(n1=name1,n2=name2,n3=name3);
      }

    function game(n1,n2,n3)
    {
    music1('categories.mp3'); // запускает музыку в самом начале

    let com1Name = n1;   // Имя команды №1
    let com2Name = n2;  // Имя команды №2
    let com3Name = n3;// Имя команды №3
    let com1 = 0; // Счет команды №1
    let com2 = 0; // Счет команды №2
    let com3 = 0; // Счет команды №3
    let i=0; // Переменная для счетчика мигания

    // заголовки тем в табло вопросов
    document.getElementById('one').innerHTML = round['row'][0];
    document.getElementById('two').innerHTML = round['row'][1];
    document.getElementById('three').innerHTML = round['row'][2];
    document.getElementById('four').innerHTML = round['row'][3];
    document.getElementById('five').innerHTML = round['row'][4];
    document.getElementById('six').innerHTML = round['row'][5];
    document.getElementById(1).innerHTML = round[1][3];
    document.getElementById(2).innerHTML = round[2][3];
    document.getElementById(3).innerHTML = round[3][3];
    document.getElementById(4).innerHTML = round[4][3];

    // название + счёт
    document.getElementById('com1').innerHTML = com1Name+': '+com1;
    document.getElementById('com2').innerHTML = com2Name+': '+com2;
    document.getElementById('com3').innerHTML = com3Name+': '+com3;

    // Кнопки игрового табло
    document.getElementById('11').onclick = () => {flash('one',11)}
    document.getElementById('12').onclick = () => {flash('one',12)}
    document.getElementById('13').onclick = () => {flash('one',13)}
    document.getElementById('14').onclick = () => {flash('one',14)}
    document.getElementById('15').onclick = () => {flash('one',15)}
    document.getElementById('16').onclick = () => {flash('one',16)}
    document.getElementById('17').onclick = () => {flash('one',17)}

    document.getElementById('21').onclick = () => {flash('two',21)}
    document.getElementById('22').onclick = () => {flash('two',22)}
    document.getElementById('23').onclick = () => {flash('two',23)}
    document.getElementById('24').onclick = () => {flash('two',24)}
    document.getElementById('25').onclick = () => {flash('two',25)}
    document.getElementById('26').onclick = () => {flash('two',26)}
    document.getElementById('27').onclick = () => {flash('two',27)}

    document.getElementById('31').onclick = () => {flash('three',31)}
    document.getElementById('32').onclick = () => {flash('three',32)}
    document.getElementById('33').onclick = () => {flash('three',33)}
    document.getElementById('34').onclick = () => {flash('three',34)}
    document.getElementById('35').onclick = () => {flash('three',35)}
    document.getElementById('36').onclick = () => {flash('three',36)}
    document.getElementById('37').onclick = () => {flash('three',37)}

    document.getElementById('41').onclick = () => {flash('four',41)}
    document.getElementById('42').onclick = () => {flash('four',42)}
    document.getElementById('43').onclick = () => {flash('four',43)}
    document.getElementById('44').onclick = () => {flash('four',44)}
    document.getElementById('45').onclick = () => {flash('four',45)}
    document.getElementById('46').onclick = () => {flash('four',46)}
    document.getElementById('47').onclick = () => {flash('four',47)}

    document.getElementById('51').onclick = () => {flash('five',51)}
    document.getElementById('52').onclick = () => {flash('five',52)}
    document.getElementById('53').onclick = () => {flash('five',53)}
    document.getElementById('54').onclick = () => {flash('five',54)}
    document.getElementById('55').onclick = () => {flash('five',55)}
    document.getElementById('56').onclick = () => {flash('five',56)}
    document.getElementById('57').onclick = () => {flash('five',57)}

    document.getElementById('61').onclick = () => {flash('six',61)}
    document.getElementById('62').onclick = () => {flash('six',62)}
    document.getElementById('63').onclick = () => {flash('six',63)}
    document.getElementById('64').onclick = () => {flash('six',64)}
    document.getElementById('65').onclick = () => {flash('six',65)}
    document.getElementById('66').onclick = () => {flash('six',66)}
    document.getElementById('67').onclick = () => {flash('six',67)}

    document.getElementById('1').onclick = () => {flash(1,1)}
    document.getElementById('2').onclick = () => {flash(2,2)}
    document.getElementById('3').onclick = () => {flash(3,3)}
    document.getElementById('4').onclick = () => {flash(4,4)}

    // функция мигания и вопроса
    function flash(a,b,n=0)
    {
        i = setInterval(function() 
        {
            if (n > 6) 
            {
                document.getElementById(a).style.backgroundColor = '';  // конец мигания
                document.getElementById(a).style.color = '#cc9';        // конец мигания
                document.getElementById(b).style.backgroundColor = '';  // конец мигания
                document.getElementById(b).innerHTML = '';              // конец мигания
                document.getElementById('qst_sect').style.zIndex = 2;   // показать окно вопроса
                clearInterval(i);                                       // остановить счетчик запущенный для мигания

                // механика задания вопросов

                // если код 1 то это вопрос текст - ответ текст
                     if (round[b][0]==1) {document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка поля от картинок
                                          document.getElementById('qst').innerHTML = round[b][1];} // вопрос текст
                // если код 2 то это вопрос картинка - ответ текст                          
                else if (round[b][0]==2) {document.getElementById('qst').innerHTML = ''; // скрываем текст
                                          document.getElementById('qst_box').style.backgroundImage = 'url(' + round[b][1] + ')'; // вопрос картинка
                                          document.getElementById('qst_box').style.backgroundSize = '100%';}
                // если код 3 то это вопрос текст - ответ картинка
                else if (round[b][0]==3) {document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка поля от картинок
                                          document.getElementById('qst').innerHTML = round[b][1];} // вопрос текст
                // если код 4 то это вопрос текст - ответ музыка
                else if (round[b][0]==4) {document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка поля от картинок
                                          document.getElementById('qst').innerHTML = round[b][1];} // вопрос текст
                
                
                          
                // управление счетом кнопками
                document.getElementById('btn_com1_pl').onclick = () => {    // плюс 1-й команде
                    document.getElementById('qst_sect').style.zIndex = -1;
                         if ( (b-1) % 10 == 0 ) {changeScorePlus('com1',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScorePlus('com1',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScorePlus('com1',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScorePlus('com1',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScorePlus('com1',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScorePlus('com1',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScorePlus('com1',700)}
                }
                document.getElementById('btn_com1_min').onclick = () => {    // минус 1-й команде
                         if ( (b-1) % 10 == 0 ) {changeScoreMinus('com1',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScoreMinus('com1',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScoreMinus('com1',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScoreMinus('com1',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScoreMinus('com1',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScoreMinus('com1',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScoreMinus('com1',700)}
                }
                document.getElementById('btn_com2_pl').onclick = () => {    // плюс 2-й команде
                    document.getElementById('qst_sect').style.zIndex = -1;
                         if ( (b-1) % 10 == 0 ) {changeScorePlus('com2',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScorePlus('com2',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScorePlus('com2',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScorePlus('com2',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScorePlus('com2',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScorePlus('com2',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScorePlus('com2',700)}
                }
                document.getElementById('btn_com2_min').onclick = () => {    // минус 2-й команде
                         if ( (b-1) % 10 == 0 ) {changeScoreMinus('com2',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScoreMinus('com2',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScoreMinus('com2',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScoreMinus('com2',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScoreMinus('com2',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScoreMinus('com2',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScoreMinus('com2',700)}
                }
                document.getElementById('btn_com3_pl').onclick = () => {    // плюс 3-й команде
                    document.getElementById('qst_sect').style.zIndex = -1;
                         if ( (b-1) % 10 == 0 ) {changeScorePlus('com3',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScorePlus('com3',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScorePlus('com3',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScorePlus('com3',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScorePlus('com3',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScorePlus('com3',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScorePlus('com3',700)}
                }
                document.getElementById('btn_com3_min').onclick = () => {    // минус 3-й команде
                         if ( (b-1) % 10 == 0 ) {changeScoreMinus('com3',100)}
                    else if ( (b-2) % 10 == 0 ) {changeScoreMinus('com3',200)}
                    else if ( (b-3) % 10 == 0 ) {changeScoreMinus('com3',300)}
                    else if ( (b-4) % 10 == 0 ) {changeScoreMinus('com3',400)}
                    else if ( (b-5) % 10 == 0 ) {changeScoreMinus('com3',500)}
                    else if ( (b-6) % 10 == 0 ) {changeScoreMinus('com3',600)}
                    else if ( (b-7) % 10 == 0 ) {changeScoreMinus('com3',700)}
                }
                    // управление показом ответов клавиатурой
                    document.addEventListener('keydown',(z)=>{     

                        // если код 1 то это вопрос текст - ответ текст (т.е. при ответе показываем ответ текст)
                         if (z.code == 'KeyA' && round[b][0] == 1)  {audio.src ='none'; // чтоб не включилась музыка
                                                                     document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка от картинки
                                                                     document.getElementById('qst').innerHTML = round[b][2]} // ответ текст
                         
                        // если код 2 то это вопрос картинка - ответ текст (т.е. при ответе закрываем картинку показываем ответ текст)
                    else if (z.code == 'KeyA' && round[b][0] == 2)  {audio.src ='none'; // чтоб не включилась музыка
                                                                     document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка от картинки
                                                                     document.getElementById('qst').innerHTML = round[b][2]} // ответ текст

                        // если код 3 то это вопрос текст - ответ картинка (т.е. при ответе показываем ответ картинку)
                    else if (z.code == 'KeyA' && round[b][0] == 3)  {audio.src ='none'; // чтоб не включилась музыка
                                                                     document.getElementById('qst').innerHTML = ''; // скрываем текст
                                                                     document.getElementById('qst_box').style.backgroundImage = 'url(' + round[b][2] + ')';
                                                                     document.getElementById('qst_box').style.backgroundSize = '100%'}

                        // если код 3 то это вопрос текст - ответ музыка (т.е. при ответе проигрываем музыку)
                    else if (z.code == 'KeyA' && round[b][0] == 4)  {document.getElementById('qst_box').style.backgroundImage = 'none'; // очистка от картинки
                                                                     document.getElementById('qst_box').style.backgroundImage = 'url(play.png)';
                                                                     document.getElementById('qst_box').style.backgroundPosition = 'center';
                                                                     document.getElementById('qst_box').style.backgroundSize = '10%';
                                                                     document.getElementById('qst_box').style.backgroundRepeat = 'no-repeat';
                                                                     document.getElementById('qst').innerHTML = ''; // скрываем текст
                                                                     music1(round[b][2])}

                        // если никто не ответил правильно нажимаем N и скрываем окно вопроса                                                                                       
                        else if (z.code == 'KeyN') {document.getElementById('qst_sect').style.zIndex = -1;} 

                        // финальное табло                                                                                       
                        else if (z.code == 'KeyF') {document.getElementById('final').style.zIndex = 1;music1('super.mp3')}      
                        // убираем кнопками 1 2 3 4 вопросы с табло                                                                                       
                        else if (z.code == 'Digit1') {document.getElementById(1).innerHTML = ''}                                                                                       
                        else if (z.code == 'Digit2') {document.getElementById(2).innerHTML = ''}                                                       
                        else if (z.code == 'Digit3') {document.getElementById(3).innerHTML = ''}      
                        else if (z.code == 'Digit4') {document.getElementById(4).innerHTML = ''}   
                        else if (z.code == 'KeyT')  {music1('30.mp3')}                                                                                 
                    }) // конец слушателя клавиатуры                    

            }
            else if (n % 2 == 0) 
            {
                document.getElementById(a).style.backgroundColor = '#cc9';
                document.getElementById(a).style.color = '#117';
                document.getElementById(b).style.backgroundColor = '#cc9';
                document.getElementById(b).style.color = '#117';
                n++;
            }
            else 
            {
                document.getElementById(a).style.backgroundColor = '';
                document.getElementById(a).style.color = '#cc9';
                document.getElementById(b).style.backgroundColor = '';
                document.getElementById(b).style.color = '#cc9';
                n++;
            }
        }
        , 100); // конец setInterval
    } // конец flash function

    // функция изменения счёта
    function changeScorePlus(a,b,n=0)
    {
             if (a=='com1') {com1+=b;document.getElementById(a).innerHTML = com1Name+': '+com1;colorScorePl(a,n)}
        else if (a=='com2') {com2+=b;document.getElementById(a).innerHTML = com2Name+': '+com2;colorScorePl(a,n)}
        else if (a=='com3') {com3+=b;document.getElementById(a).innerHTML = com3Name+': '+com3;colorScorePl(a,n)}
    }

    function changeScoreMinus(a,b,n=0)
    {
             if (a=='com1') {com1-=b;document.getElementById(a).innerHTML = com1Name+': '+com1;colorScoreMin(a,n);music1('incorrect.mp3')}
        else if (a=='com2') {com2-=b;document.getElementById(a).innerHTML = com2Name+': '+com2;colorScoreMin(a,n);music1('incorrect.mp3')}
        else if (a=='com3') {com3-=b;document.getElementById(a).innerHTML = com3Name+': '+com3;colorScoreMin(a,n);music1('incorrect.mp3')}
    }

    // Мигание зелёным когда счет прибавляется
    function colorScorePl (a,n)
    {
        i = setInterval(function() 
             {
                 if (n >= 6) 
                 {
                 clearInterval(i);
                 document.getElementById(a).style.color = '#446'
                 }
                 else if (n < 1) {document.getElementById(a).style.color = '#0f0';n++}
                 else if (n < 2) {document.getElementById(a).style.color = '#2f3';n++}
                 else if (n < 3) {document.getElementById(a).style.color = '#4f6';n++}
                 else if (n < 4) {document.getElementById(a).style.color = '#496';n++}
                 else if (n < 5) {document.getElementById(a).style.color = '#476';n++}
                 else if (n < 6) {document.getElementById(a).style.color = '#456';n++}
                 else {}
             }
             , 40); 
    }

    // Мигание красным когда счет убавляется
    function colorScoreMin (a,n)
    {
        i = setInterval(function() 
             {
                 if (n >= 6) 
                 {
                 clearInterval(i);
                 document.getElementById(a).style.color = '#446'
                 }
                 else if (n < 1) {document.getElementById(a).style.color = '#f00';n++}
                 else if (n < 2) {document.getElementById(a).style.color = '#f23';n++}
                 else if (n < 3) {document.getElementById(a).style.color = '#f46';n++}
                 else if (n < 4) {document.getElementById(a).style.color = '#946';n++}
                 else if (n < 5) {document.getElementById(a).style.color = '#746';n++}
                 else if (n < 6) {document.getElementById(a).style.color = '#546';n++}
                 else {}
             }
             , 40); 
    }

    }// конец function game
}// stop