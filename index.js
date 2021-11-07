//Main
function generate(amount = BigInt){
    var proxies = ""

    for( i = 0; i <= amount; i++){
        var proxy = "";
        var proxyList = ["http://", "https://", "socks4://", "socks5://"];
        var proxyType = proxyList[Math.floor(Math.random() * proxyList.length)];
        var proxyPort = Math.floor(Math.random() * 65535) + 1;
    
        if(!proxies.length){
            proxies = `${proxyType}${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}:${proxyPort}`
        }else{
            proxies += `\n${proxyType}${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}.${Math.floor(Math.random() * 255) + 1}:${proxyPort}`
        }
    }

    return proxies;
}

//Exporter
module.exports = {
    generate: generate
}
