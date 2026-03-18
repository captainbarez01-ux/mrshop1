function buy(game) {
    let phone = "9647501665652"; // your number
    let msg = "Hello, I want to buy " + game + " from MR.SHOP";
    
    window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(msg));
}

