export function getRankBackgroundColor(rank: number) {
  switch (rank) {
    case 1:
      return "#AA96DA";
    case 2:
      return "#C5FAD5";
    case 3:
      return "#FFFFD2";
    default:
      return;
  }
}

export function getNumberBackGroundColor(rank: number) {
  switch (rank) {
    case 1:
      return "#6FC7E1";
    case 2:
      return "#6FC7E1";
    case 3:
      return "#EFD557";
    default:
      return;
  }
}

export function getRandomNumber(min: number = 1000, max: number = 1000000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
