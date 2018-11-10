var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"]["hoten"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "* Vui lòng nhập tên";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "* Tên của bạn quá ngắn";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 50) {
        msgUsername.innerHTML = "* Tên của bạn quá dài";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "* Tên hợp lệ";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }
    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var valueTxtEmail = txtEmail.value
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email của bạn";
    } else {
        if (valueTxtEmail.search('@') == -1) {
            msgEmail.innerHTML = "* Email không hợp lệ. Vui lòng điền email theo dạng abc@gmail.com";
        } else {
            msgEmail.innerHTML = "* Email hợp lệ";
        }
    }
}