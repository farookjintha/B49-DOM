// var numbers = [11, 12, 13, 14, 15, 16, 17, 18 ,19, 20];
var numbers = [1,2,3,4,5,6,7,8,9,10];
//Anonymous Function
(function(){
    const filteredValues = numbers.filter((num) => {
        // prime number logic
        // num -> 1;  -> 1%2, 1%3, 1%4
        // num -> 2; -> 2%2
        // num -> 3; -> 3%2 
        // num -> 4; -> 4%2
        // num -> 5; -> 5%2
        
        for(let i = 2; i < num; i++){
            if(num % i === 0){ // 10%2 = 0
                return false;
            }
        }
        return num > 1;

    });

    console.log(filteredValues);
})();