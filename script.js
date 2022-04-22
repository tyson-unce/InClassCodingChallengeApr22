let arrayS = ["Hello", "Hi", "Hey", "Salutations", "Oloha"];
let arrayN = [87, 34, 67, 87, 90];
let arrayB = [true, false, true, false, true];

function arrayAdder(p1)
{
    if (typeof(p1[0]) == "number"){

        p1.push(Number(88))
        return console.log(p1)

    }
    else if (typeof(p1[0]) == "string"){
        p1.push("Barack")
        return console.log(p1)
    }
    else if (typeof(p1[0]) == "boolean"){
        p1.push(false)
        return console.log(p1)
        
    }
    else {
        console.log("RETURN A VALID DATA TYPE FOR YOUR '0' INDEX")
    }
}


//INSERT arrayB, arrayS, OR arrayN HERE
arrayAdder()