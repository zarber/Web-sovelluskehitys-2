const foo = fetch('https://xkcd.now.sh/?comic=latest')
  .then((response) => response.json())
.then((data) => {
    console.log(data);
    const xy = document.createElement("img");
    xy.setAttribute('alt', data.alt);
    xy.setAttribute('src', data.img);
    document.body.appendChild(xy);
});