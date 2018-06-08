//const myclick = document.querySelector('#Mybutton');
//const myTest = document.querySelector('input');

//myclick.addEventListener('click', (e) => {
    //alert(myTest.value);
    //const spanele = document.createElement('span');
    //spanele.textContent=myTest.value;
    //const dive1=document.querySelector('#result');
    //document.body.appendChild(spanele);
//});

//myTest.addEventListener('keyup', (e) => {
    //console.log(e.target.value);
//});

const resultDiv =document.querySelector('#result');
const names =[
    {
        name:'Anvesh'
    },
    {
        name:'Ramesh'
    },
    {
        name:'Chandrakala'
    }
];
const myTest = document.querySelector('input');

function namerender(list)
{
    resultDiv.innerHTML='';
const ulel=document.createElement('ul');
names.forEach((user)=>{
    const liel=document.createElement('li')
    liel.textContent=user.name;
    ulel.appendChild(liel);
});
resultDiv.appendChild(ulel);
}
namerender(names);

myTest.addEventListener('keyup', (e) => {
    const inputvalue=e.target.value;
    const filteredlist=names.filter(u=>u.name.includes(inputvalue));
    namerender(filteredlist); 
});
