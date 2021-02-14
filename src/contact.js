function contact(){
    const main = document.getElementById('main');
    const contactMain = document.createElement('div');
    main.appendChild(contactMain);
    contactMain.style.cssText = "display: flex; flex-direction: column;"
    const img = document.createElement('img');
    img.setAttribute('src', "/imgs/taco-shop.jpg");
    img.style.cssText = "align-self: center; padding-top: 20px;"
    const mapSection = document.createElement('section');
    mapSection.style.cssText = "display: flex; padding: 40px; justify-content: center;"
    const address = document.createElement('p');
    address.innerHTML = "Gerichtstraße 12, <br> 13347 Berlin <br><br> +49 33208672";
    const frame = document.createElement('iframe');
    frame.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9705.767588762938!2d13.3754001!3d52.5435312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x118443dad7b1fc86!2sGerichtsh%C3%B6fe!5e0!3m2!1sen!2sde!4v1613165764395!5m2!1sen!2sde");
    contactMain.appendChild(img);
    mapSection.appendChild(frame);
    mapSection.appendChild(address);
    contactMain.appendChild(mapSection);
    
}

export default contact;