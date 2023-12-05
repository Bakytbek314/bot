// https://api.telegram.org/bot6391478733:AAG9SOtkTKOXQbFoyO7BPoJJIn5B4gL6Hm4/getUpdates

let token = "6391478733:AAG9SOtkTKOXQbFoyO7BPoJJIn5B4gL6Hm4";

let chatId = "1057997595";
let urlAPI = `https://api.telegram.org/bot${token}/sendMessage`
let success = document.getElementById("success");


document.getElementById("tg").addEventListener("submit", function(e){
    e.preventDefault();
    let massange = `<b>Заявка с сайта!</b>\n`;
    massange += `<b>Отправитель: </b> ${this.name.value}\n`
    massange += `<b>Номер: </b> ${this.number.value}\n`
    massange += `<b>Почта: </b> ${this.email.value}\n`
    console.log(massange);
    axios.post(urlAPI,{
        chat_id: chatId,
        parseMode: "html",
        text: massange
    }).then((res) =>{
        this.name.value = "";
        this.number.value ="";
        this.email.value = "";
        success.innerHTML = "Отправленно";
        success.style.display = "block";
    }).catch((err) =>{
        console.log("error");
    }).finally(() => console.log("succesfully"))
})