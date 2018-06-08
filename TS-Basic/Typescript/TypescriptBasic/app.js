(function()
{
    var a = "Anvesh";
    var a1 = "Mahendra";
    var b = 10;
    var b1 = 20;
    var c = true;
    var c1 = false;
    var d = {};
    var d1 = {};
    var e = {
        KKK: "Amulya"
    };
    var f = new Date();
    var arr = ['abc', 'def'];
    var arr1 = ['ghi', 'klm'];
    var usr = {
        name: 'jh',
        age: 11
    };
    var users1 = [
        { name: 'aaa',
            age: 21
        }
    ];
    users1.push({
        name: 'fjh',
        age: 12
    });
    function add(x, y) {
        return x + y;
    }
    function log(msg) {
        console.log(msg);
    }
    //const a= log('Anvesh');
    var add1 = function (x, y) { return x + y; };
    var util = {
        name: 'hello',
        log: function (msg) {
            return msg + util.name;
        }
    };
    var res = util.log('hi ');
    console.log(res);
})()
