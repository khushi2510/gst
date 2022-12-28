function tcalc () {

    var price = document.getElementById("taxprice").value;
    var price1 = document.getElementById("taxgrand").value;

    // percent = document.getElementById("taxperc").value;

    if(document.getElementById("taxperc")){
        var percent = document.getElementById("taxperc").value;
    }


    // if(document.getElementById("taxperc").value == document.getElementById("5").value){
    //     document.getElementById("5").checked = true;
    // }
    if(document.getElementById("5").checked==true){
        var percent = document.getElementById("5").value;
        document.getElementById("taxperc").value = percent;
    }
    else(document.getElementById("taxperc").value != document.getElementById("5").value);{
        document.getElementById("5").checked = false;
    }



    if(document.getElementById("12").checked==true){
        var percent = document.getElementById("12").value;
        document.getElementById("taxperc").value = percent;
    }
    if(document.getElementById("18").checked==true){
        var percent = document.getElementById("18").value;
        document.getElementById("taxperc").value = percent;

    }
    if(document.getElementById("28").checked==true){
        var percent = document.getElementById("28").value;
        document.getElementById("taxperc").value = percent;
    }

    price = parseFloat(price);
    price1 = parseFloat(price1);
    percent = parseFloat(percent);

  
    if(document.getElementById("taxperc").value != document.getElementById("5").value){
        document.getElementById("5").checked = false;
    }
    if(document.getElementById("taxperc").value == document.getElementById("12").value){
        document.getElementById("12").checked = true;
    }
    if(document.getElementById("taxperc").value != document.getElementById("12").value){
        document.getElementById("12").checked = false;
    }
    if(document.getElementById("taxperc").value == document.getElementById("18").value){
        document.getElementById("18").checked = true;
    }
    if(document.getElementById("taxperc").value != document.getElementById("18").value){
        document.getElementById("18").checked = false;
    }
    if(document.getElementById("taxperc").value == document.getElementById("28").value){
        document.getElementById("28").checked = true;
    }
    if(document.getElementById("taxperc").value != document.getElementById("28").value){
        document.getElementById("28").checked = false;
    }
    if (price) {
           var tax = (price / 100) * percent,
            grand = price * ((100 + percent) / 100);
          
        document.getElementById("taxamt").value = tax;
        document.getElementById("taxgrand").value = grand;
    }

    else if(price1){
        var amt = (100 * price1) / (100 + percent);
        document.getElementById("taxprice").value = amt;
    }
 return false;
    // var price1= document.getElementById("taxgrand").value
    //  price1 = parseFloat(price1);

    // var amt = (100 * price1) / (100 + percent);
    // document.getElementById("taxprice").value = amt;

    // return false;

}