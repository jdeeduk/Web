
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

async function getInvite(id) {
    const response = await fetch(`../api/invite?id=${id}`);
    return response.json();
}

function getPreviewImage(id) {
    return `${window.location.origin}/api/image-preview?id=${id}`;
}

function setQRCode() {
    var path = window.location.pathname;
    if (!path.startsWith("/invite/")) {
        document.getElementById("inviteInfo").remove();
        return;
    }
    new QRCode(document.getElementById("qrcode"), window.location.href);
}

async function update() {
    setQRCode();

    var inviteId = getCurrentInviteId();
    var inviteCode = inviteId.substring(0, 8);
    document.getElementById("inviteCode").innerHTML = inviteCode;
    const invite = await getInvite(inviteId);
    setMetaTagsForInviteLink(invite);
}

async function setMetaTagsForInviteLink(invite) {
    const albumImage = invite.groupImage;
    if (albumImage !== undefined) {
        const imageURL = getPreviewImage(albumImage);
        document.querySelector('meta[property="og:image"]').setAttribute('content', imageURL);
    }
    document.querySelector('meta[property="og:title"]').setAttribute('content', invite.groupName);
    document.querySelector('meta[property="og:type"]').setAttribute('content', "website");
    // document.querySelector('meta[property="og:url"]').setAttribute('content', "https://www.echophotos.io/invite/");
}

update();
