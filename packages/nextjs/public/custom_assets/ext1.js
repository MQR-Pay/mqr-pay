$(document).ready(function() {
    // console.log("Opening camera");
    // startCamera();


    // $('#myModal').on('hidden.bs.modal', function () {
    //     console.log('/clossing the camera.');
    //     closeCamera();
    // });

    

});



//check if string is empty --- ON TOP
function isEmpty(str) {
    str = str.trim();
    return (!str || 0 === str.length);
}

function revertCamera() {

    startCamera();
}

//-ON TOP
function remove_hash_from_url() {
    var uri = window.location.toString();
    if (uri.indexOf("#") > 0) {
        var clean_uri = uri.substring(0, uri.indexOf("#"));
        window.history.replaceState({}, document.title, clean_uri);
    }
}

const ethAddressRegex = /^0x[a-fA-F0-9]{40}$/;

const baseValueRegex = /base:(0x[a-fA-F0-9]{40})\?value=([0-9]*\.?[0-9]*)/;

function extractAddressAndAmount(input) {
    var result = {};

    // Check if input is a simple Ethereum address
    if (ethAddressRegex.test(input)) {
        result.address = input;
    } else if (baseValueRegex.test(input)) {
        // Check if input is in the base format with a value
        var matches = input.match(baseValueRegex);
        if (matches && matches[1]) {
            result.address = matches[1];
            result.amount = parseFloat(matches[2]);
        }
    } else {
        throw new Error("Invalid format: Input does not match a valid Ethereum address or base format.");
    }

    // Ensure the address format is correct
    if (!ethAddressRegex.test(result.address)) {
        throw new Error("Invalid address format");
    }

    return result;
}

// var reqCounter = 0;
//web qr function
function read(a) {
    var readResults = htmlEntities(a);

    //process the various authentications and give feedback to the user
    aLength = a.length;
   
    console.log(readResults);

    $('#send_qr_feedback').html(readResults);
    

    //verify the address
    try {
        var qr_address_data = extractAddressAndAmount(readResults);

        console.log(qr_address_data.address);

        // qr_address
        const toAddressInput = document.getElementById("qr_address");
        toAddressInput.value = qr_address_data.address;

        setToAddress(qr_address_data.address);

        document.getElementById("scan_for_address").style.display = "none";
        document.getElementById("qr_error").style.display = "none";
        document.getElementById("stage2").style.display = "block";
        closeCamera();

    } catch (error) {
        console.error(error.message);
        document.getElementById("scan_for_address").style.display = "none";
        document.getElementById("qr_error").style.display = "block";
        closeCamera();
    }

}





function startCamera() {

    if (cameraOn == 0) {
        $('#send_qr_feedback').html('');

        gCtx = null;
        gCanvas = null;
        c = 0;
        stype = 0;
        gUM = false;
        webkit = false;
        moz = false;

        load();

    } else {
        //$('#send_qr_feedback').html('You have already started the camera. if it\'s not yet on, click on <b>Stop camera</b> before clicking on <b>Start camera</b>');
        window.location.href = "#send_qr_feedback";
        remove_hash_from_url();
    }

}

function closeCamera() {

    cameraOn = 0;
    v.srcObject.getVideoTracks().forEach(track => track.stop());

    //$('#send_qr_feedback').html('You have successfully closed the camera. Click on <a onclick=\"startCamera()\" class=\"text-primary\"><strong>Start camera</strong></a> to restart it and scan a QR code');
    $('#outdiv').html('<video id="v_test" class="img-responsive img-thumbnail" style="margin-left: auto; margin-right: auto;" width="600" height="600" autoplay controls></video>');
    window.location.href = "#send_qr_feedback";
    remove_hash_from_url();

    gCtx = null;
    gCanvas = null;
    c = 0;
    stype = 0;
    gUM = false;
    webkit = false;
    moz = false;
}