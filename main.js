function processConfirm(answer) {
    let result = "";
    if(answer) {
        result = " Tới luôn đi";
    }
    else {
        result = "May baybe";
    }
    return result;
}
let confirmAnswer =  confirm("Shall game");
let theAnswer = processConfirm(confirmAnswer);
alert(theAnswer)