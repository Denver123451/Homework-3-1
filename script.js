const firstQuestion = confirm('Есть ли вам 18 лет?')

if(firstQuestion){
   const secondQuestion = prompt('Во сколько вы встаете?')

    if (!isNaN(Number(secondQuestion))) {
        if (Number(secondQuestion) > 0 && Number(secondQuestion) <= 5 ){
            alert("Очень рано")
        } else if (Number(secondQuestion) > 5 && Number(secondQuestion) <= 8  ) {
            alert("Всё равно рано")
        } else if (Number(secondQuestion) > 8 && Number(secondQuestion) <= 11  ) {
            alert("Нормально")
        } else if (Number(secondQuestion) > 11 && Number(secondQuestion) <= 14  ) {
            alert("Слишком поздно")
        } else if (Number(secondQuestion) > 14 && Number(secondQuestion) < 24  ) {
            alert("Очень-очень поздно")
        }
        else{alert("Научись пользоваться часами!")}
    }
    else (alert('некорректный ввод'))

  }
   else (alert('Вам запрещено проходить опрос'))

