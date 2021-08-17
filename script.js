    function formatemoney(value){
    value=math.ceil(value * 100) / 100;
    value =  value.toFixed(2);
    return value;
    }

    function formatsplit(value){
        if (value == "1") return value + "person";
         return value + " people";
    }


    function update() {
       let bill = Number(document.getElementById("yourBill").value);
       let tipPercent  = document.getElementById("tipInput").value;
       let split = document.getElementById("splitInput").value;
    //    console.log(bill,tipPercent,split);

        let tipValue = bill * (tipPercent / 100);
        let tipEach = tipValue / split;
        let newBillEach = (bill + tipValue) / split;

        document.getElementById("tipPercent").innerHTML = tipPercent + "%" ;
        document.getElementById("tipValue").innerHTML = tipValue;
        document.getElementById("totalWithTip").innerHTML = bill+tipValue;
        document.getElementById("splitValue").innerHTML = formatsplit(split);
        document.getElementById("billEach").innerHTML = newBillEach;
        document.getElementById("tipEach").innerHTML = tipEach;
    
    }

    let container = document.getElementById('container');
    container.addEventListener("input",update);

