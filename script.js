function changeClothes(type) {
  const doll = document.getElementById("doll");
  const selectedOption = document.getElementById(type).value;

  switch (type) {
    case "dress":
      doll.src = `images/${selectedOption}.png`;
      break;
    case "shoes":
      doll.src = `images/${selectedOption}.png`;
      break;
    case "hat":
      doll.src = `images/${selectedOption}.png`;
      break;
    default:
      break;
  }
}
