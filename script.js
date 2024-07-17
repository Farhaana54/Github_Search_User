function git(){
    var originalName = document.getElementById('text').value;
    console.log(originalName);
    fetch("https://api.github.com/users/" + originalName)
    .then((result => result.json()))
    .then((data) => {
        console.log(data);
        document.getElementById("result1").innerHTML = `<img src="${data.avatar_url}" alt="user_avatar">`;
        document.getElementById("result2").innerHTML = ("id:"+data.id);
        document.getElementById("result3").innerHTML =("Repos:"+data.public_repos);
    });
}