let user = prompt('Каалаганызды танданыз:\n1.Таш\n2.Кайчы\n3.Кагаз');
let comp = Math.random();
let result = 0;
let compChiter = '';
let userBot = '';
if(user != '1' && user != '2' && user != '3'){
    userBot = 'Бироону тандашыныз керек 1 2 же 3';
}else if(user === '1'){
    userBot = 'Сиз таш тандадыныз!';
}else if(user === '2'){
    userBot = 'Сиз кайчы тандадыныз!';
}else if(user === '3'){
    userBot = 'Сиз кагаз тандадыныз!';
}



if(comp <= 0.34){
    comp = 1;
    compChiter = 'Компьютер таш тандады';
}else if(comp <= 0.64){
    comp = 2;
    compChiter = 'Компьютер кайчы тандады';
}else {
    compChiter = 'Компьютер кагаз тандады';
}



function game(bot1, bot2){
    if(bot1 === 1){
        if(bot2 === 2){
            return 'Сиз уттунуз';
        } else {
            return 'Сиз утулдунуз';
        }
    }   
    if(bot1 === 3){
        if(bot2 === 2){
            return 'Сиз уттунуз';
        } else {
            return 'Сиз утулдунуз';
        }
    }
    if(bot1 === 2){
        if(bot2 === 1){
            return 'Сиз утулдунуз';
        } else {
            return 'Сиз уттунуз';
        }
    }
    if(bot1 != 1 || bot2 != 2 || bot3 != 3){
        return 'Утуучу жок! Колдонуучу туура эмес сан жазды!'
    }
}


result = game(+user, comp);
alert(userBot + '\n' + compChiter + '\n' + result);