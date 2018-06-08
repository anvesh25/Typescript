(function()
{
    interface Iuser
    {
      name: string,
      age: number  
    }
    const Users :Array<Iuser> =
    [
        {
            name:'Rajanikanth',
            age: 12
        },
        {
            name : 'Vijay',
            age:11
        },
        {
            name : 'Kamal',
            age: 14
        }
    ];
    class SearchResult
    {
        constructor(public list:Array<Iuser>)
        {
        }
        renderList()
        {
            const containerEL:HTMLDivElement =document.querySelector('#container') as HTMLDivElement;
            const ulel:HTMLUListElement =document.createElement('ul');
            this.list.forEach((item:Iuser) => 
            {
                const liel:HTMLLIElement =document.createElement('li');
                liel.textContent =item.name;
                ulel.appendChild(liel);
            });
            containerEL.innerHTML="";
            containerEL.appendChild(ulel);

        }
    }
    new SearchResult(Users).renderList();

    const myinput:HTMLInputElement = document.querySelector('input');
    myinput.addEventListener('keyup', (e: KeyboardEvent) => {
        const inpuEl :HTMLInputElement = e.target as HTMLInputElement;
        const inputVal: string = inpuEl.value;
        const filteredusers: Array<Iuser> = Users.filter((u: Iuser) => {
            u.name.includes(inputVal) || ''+u.age === inputVal;
        });
        new SearchResult (filteredusers).renderList();
    });

})()