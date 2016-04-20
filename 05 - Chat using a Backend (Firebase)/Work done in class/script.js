
// create new firebase app
var app = new Firebase('https://voll-coole-chatapp.firebaseio.com');

// write data to server
app.push({
    name: 'Froggy',
    text: 'Where is my pong?!'
});

// get last 20 and listen to updates
app.limitToLast(20).on('child_added', function (data) {
    // this function is called once for every message
    
    // grab data from message
    var name = data.val().name;
    var text = data.val().text;
    
    // normalise data
    if (!name) {
        name = "Anonymous";
    }
    
    if (!text) {
        return;
    }
    
//    <li>
//        <strong>Supraman:</strong>
//        Your breathe is minty.
//    </li>
    
    // create html element
    var element = $('<li><strong>' + name +
                    '</strong>: ' + text + '</li>');
    
    // append to our container
    $("#messages").append(element);
});
