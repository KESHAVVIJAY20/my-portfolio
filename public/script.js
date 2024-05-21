let hide = document.querySelector('.hide');
let chat = document.querySelector('.chat');
let chat1 = document.querySelector('.chat1');

// chat.addEventListener('mouseover',function(){
//     chat1.classList.add('unhide');
// });
// chat.addEventListener('mouseleave', function(){
//     chat1.classList.remove('unhide');
// });
chat.addEventListener('click',function(){
    window.open('https://api.whatsapp.com/send/?phone=+919352515020&text=Hi&type=phone_number','_blank');
})