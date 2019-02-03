function callApi(url, method, jsonData){

    $.ajax({
        url: url,
        data: jsonData,
        type: method,
        dataType: 'jsonp',
        error: function() {
           alert("An error occurred");
        },
        success: function(data) {
           $("#alertBox").show();
           $("#alertBoxMessage").html(data);
        },
     });
}

function processButtonClick(){
    // sample usage
    let data = {"a":1, "b":2};
    callApi("http://numbersapi.com/42", "GET", data);
}

function closeAlert(){
    $("#alertBox").hide();
}