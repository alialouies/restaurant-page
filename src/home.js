function home(){
    const main = document.getElementById('main');
    const img = document.createElement('img');
    img.setAttribute('src', "/imgs/tacos-mexico-city.jpeg");
    main.style.cssText = "display: flex; justify-content: center;";
    main.appendChild(img);
    img.style.cssText = "padding-top: 20px; width: 100vw;"
}

export default home;