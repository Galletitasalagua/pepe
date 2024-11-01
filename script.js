function changeClothes(type) {
  const doll = document.getElementById("doll");
  switch (type) {
    case "dress":
      doll.src = "images/doll_dress.png";
      break;
    case "shoes":
      doll.src = "images/doll_shoes.png";
      break;
    case "hat":
      doll.src = "images/doll_hat.png";
      break;
    default:
      doll.src = "images/doll.png";
  }
}
