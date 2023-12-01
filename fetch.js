
window.onload = function() {
    document.getElementById('button').addEventListener('click', function
() {
        fetch('https://fa9b0pt8ke.execute-api.eu-west-1.amazonaws.com/Jerem_HandsOn?key1=Jerem')
        .then((response) => {
            return response.text();
        })
        .then((myContent) => {
            document.querySelector('.content').innerHTML = myContent;
        });
        
    }, false);
}