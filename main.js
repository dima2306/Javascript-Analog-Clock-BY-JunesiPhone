function tick() {
    with(new Date()){
        var h, m, s;
        h = 30 * (getHours() % 12 + getMinutes() / 60);
        m = 6 * getMinutes();
        s = 6 * getSeconds();
        
        document.getElementById('s').style.cssText="-webkit-transform:rotate("+s+"deg);";
        document.getElementById('m').style.cssText="-webkit-transform:rotate("+m+"deg);";
        document.getElementById('h').style.cssText="-webkit-transform:rotate("+h+"deg);";
        setTimeout(tick, 1000);
    }
}