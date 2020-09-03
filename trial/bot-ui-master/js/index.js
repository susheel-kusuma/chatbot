document.getElementById("mymsg").onsubmit = (e) => {
    e.preventDefault()
    fetchmsg();
}

function serverMessage(response2) {

    document.getElementById('pp').value = response2;
}

function fetchmsg() {
    var url = 'http://localhost:5000/send-msg';
    const data = new URLSearchParams();
    for (const pair of new FormData(document.getElementById("mymsg"))) {
        data.append(pair[0], pair[1]);

    }


    fetch(url, {
            method: 'POST',
            body: data
        }).then(res => res.json())
        .then(response => {
            console.log(response);
            serverMessage(response.Reply);
            speechSynthesis.speak(new SpeechSynthesisUtterance(response.Reply))
        })
        .catch(error => console.error('Error h:', error));

}