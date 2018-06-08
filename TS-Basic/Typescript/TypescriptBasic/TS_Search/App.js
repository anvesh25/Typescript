(function () {
    var Users = [
        {
            name: 'Rajanikanth',
            age: 12
        },
        {
            name: 'Vijay',
            age: 11
        },
        {
            name: 'Kamal',
            age: 14
        }
    ];
    var SearchResult = /** @class */ (function () {
        function SearchResult(list) {
            this.list = list;
        }
        SearchResult.prototype.renderList = function () {
            var containerEL = document.querySelector('#container');
            var ulel = document.createElement('ul');
            this.list.forEach(function (item) {
                var liel = document.createElement('li');
                liel.textContent = item.name;
                ulel.appendChild(liel);
            });
            containerEL.innerHTML = "";
            containerEL.appendChild(ulel);
        };
        return SearchResult;
    }());
    new SearchResult(Users).renderList();
    var myinput = document.querySelector('input');
    myinput.addEventListener('keyup', function (e) {
        var inpuEl = e.target;
        var inputVal = inpuEl.value;
        var filteredusers = Users.filter(function (u) { return u.name.includes(inputVal); });
        new SearchResult(filteredusers).renderList();
    });
})();
