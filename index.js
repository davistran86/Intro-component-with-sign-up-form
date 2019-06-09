function insertAfter(id, message) {

  let ref = document.getElementById(id);
  ref.classList.add('error');

  // check if small element already added
  if(ref.nextElementSibling != null) {
    return null;
  } else {
    let newEl = document.createElement('small');
    newEl.innerHTML = message;

    ref.parentNode.insertBefore(newEl, ref.nextSibling);
    ref.nextSibling.classList.add('error');
    ref.classList.add('input-error');
  }
  
}

function removeError(id) {
  let ref = document.getElementById(id);
  ref.nextSibling.remove();
  ref.classList.remove('input-error','error');
}

function checkInputEmptyValue(id) {
  let value = document.forms['form-register'][id].value.length;
  return value > 0 ? true : false;
  // True: not empty, False: empty
}

function showError(id,message) {
  let value = checkInputEmptyValue(id);
  if(value == false) {
    insertAfter(id,message)
  } else {
    removeError(id);
  }
}

function checkForm() {
  showError("form-firstName","First Name cannot be empty");
  showError("form-lastName","Last Name cannot be empty");
  showError("form-email","Email cannot be empty");
  showError("form-password","Password cannot be empty");
}