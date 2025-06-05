window.onload = function() {
    document.getElementById('button').addEventListener('click', function () {
        fetch('https://4fbk09atjk.execute-api.eu-west-1.amazonaws.com/prod/sltutorial?key1=Nico')
        .then((response) => {
            return response.text();
        })
        .then((myContent) => {
            document.querySelector('.content').innerHTML = myContent;
        });
    
    }, false);
}
