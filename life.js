function show_hide() {
  if (document.getElementById("menu").style.display === "inline") {
    document.getElementById("menu").style.display = "none";
  } else {
    document.getElementById("menu").style.display = "inline";
  }
  return;
}

function modal() {
  if (document.getElementById("give_modal").style.display === "inline") {
    document.getElementById("give_modal").style.display = "none";
  } else {
    document.getElementById("give_modal").style.display = "inline";
  }
  return;
}

function cancel() {
  return modal();
}

function removeModal() {
  if (document.getElementById("give_modal").style.display === "inline") {
    return modal;
  } else {
    return;
  }
}
