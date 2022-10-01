
function copyToClipboard() {
    const inviteCode = getCurrentInviteCode();
    if (inviteCode !== null) {
        navigator.clipboard.writeText(inviteCode);
        // Alert the copied text
        alert("Copied to Clipboard!");
    } else {
        alert("Unable to identify invit code");
    }
}

function getCurrentInviteId() {
    var path = window.location.pathname;
    if (!path.startsWith("/invite/")) {
        return null;
    }
    var inviteId = path.substring(8, 44);
    return inviteId;
}

function getCurrentInviteCode() {
    var inviteId = getCurrentInviteId();
    var inviteCode = inviteId.substring(0, 8);
    return inviteCode;
}

function getInvite(id) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "/getInviteData?id=${id}", false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function setQRCode() {
    var path = window.location.pathname;
    if (!path.startsWith("/invite/")) {
        document.getElementById("inviteInfo").remove();
        return;
    }
    new QRCode(document.getElementById("qrcode"), window.location.href);
}

function update() {
    setQRCode();
    document.getElementById("inviteCode").innerHTML = getCurrentInviteCode();
}

update();
