    //Проверка начального теста
function StartTestAnswers() {
    let totalStartQuestion = 8;
    let scoreStart =0;

    let answers = {
        que1: "e", que2: "a", que3: "c", que4: "b", que5: "b", que6: "d", que7: "a",
        que8: "c"
    };

    for(let i=1; i<=totalStartQuestion; i++){
        let radios = document.getElementsByName("question" + i);
        for(let j=0; j<radios.length; j++){
            if(radios[j].checked){
                if(radios[j].value === answers["que"+i]){
                    scoreStart++;
                }
                break;
            }
        }
    }
    let resultElement = document.getElementById("result");
    alert("Ваш результат:" + scoreStart + "из" +totalStartQuestion);
    resultElement.innerHTML = "Ваш результат:" + scoreStart + "из" +totalStartQuestion;
}


    //Проверка финального теста
function FinalTestAnswers() {
    let totalFinalQuestion = 32;
    let scoreFinal =0;

    let answers = {
        que1: "a", que2: "a", que3: "b", que4: "b", que5: "a", que6: "b", que7: "c",
        que8: "a", que9: "c", que10: "c", que11: "b", que12: "b", que13: "b", que14: "c",
        que15: "c", que16: "c", que17: "b", que18: "d", que19: "c", que20: "c", que21: "b",
        que22: "c", que23: "a", que24: "d", que25: "c"
    };

    for(let i=1; i<=totalFinalQuestion; i++){
        let radios = document.getElementsByName("question" + i);
        for(let j=0; j<radios.length; j++){
            if(radios[j].checked){
                if(radios[j].value === answers["que"+i]){
                    scoreFinal++;
                }
                break;
            }
        }
    }
    let resultElement = document.getElementById("result");
    alert("Ваш результат:" + scoreFinal + "из" +totalFinalQuestion);
    resultElement.innerHTML = "Ваш результат:" + scoreFinal + "из" +totalFinalQuestion;
}


    //радиокнопки
$(document).ready(function () {

    $.each($('.ddd'),function(index, val){
        if ($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $(document).on('click', '.ddd')
});
