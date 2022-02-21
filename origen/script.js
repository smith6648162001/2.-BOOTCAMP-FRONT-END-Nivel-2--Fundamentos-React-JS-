
//crear una función para aparecer modal de contáctanos.  (contactus())
function contactus(){
    ModalContactus = document.querySelector('#modal-contactanos');
    ModalContactus.className = "show_modal";
}

function closecontactus(){
    ModalContactus = document.querySelector("#modal-contactanos");
    ModalContactus.className = "closemodal";
}

