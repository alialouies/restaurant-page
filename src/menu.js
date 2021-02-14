function menu(){
    const main = document.getElementById('main');
    const img = document.createElement('img');
    img.setAttribute('src', '/imgs/tacos.jpg');
    img.style.cssText = "width: 300px; border-radius: 50px;"
    const food = document.createElement('div');
    const drinks = document.createElement('div');
    main.style.cssText = "display: flex; flex-direction: column; align-items: center; padding-top: 20px;"
    main.appendChild(img);
    main.appendChild(food);
    main.appendChild(drinks);
    food.innerHTML = "<table><th>Food</th><tr><td>Al Pastor</td><td>2,5€</td></tr><tr><td>Carne Asada</td><td>3€</td></tr><tr><td>Bistec</td><td>2,5€</td></tr></table>";
    drinks.innerHTML = "<table><th>Drinks</th><tr><td>Water</td><td>1,5€</td></tr><tr><td>Cola</td><td>2€</td></tr><tr><td>Bier</td><td>2,5€</td></tr><tr><td>Mezcal 2 cl</td><td>4€</td></tr></table>";
    food.style.cssText = "padding-top: 20px;"
    drinks.style.cssText = "padding-top: 20px;"
}


export default menu;