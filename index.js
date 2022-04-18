const myForm = document.querySelector('#my-form');
const myname = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault()


    if(myname.value === '' || email.value === ''){
        msg.style.color = 'red';
        msg.innerHTML = 'Please Kindly enter all fields';

        setTimeout(() => msg.remove() , 3000);
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${myname.value} : ${email.value}`));
        // console.log(li)
         userList.appendChild(li);
        //  console.log(some)
        // document.querySelector("#user").appendChild(li)

        myname.value = '';
        email.value = '';
    }
}