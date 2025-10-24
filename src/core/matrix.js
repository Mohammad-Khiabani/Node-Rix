import sleep from "../utils/sleep.js";
import { matrixGreen } from "../constants/colors.js";

const random = Math.random;
const floor = Math.floor;

const columns = process.stdout.columns;

const getRandomNum = () => floor(random() * 2); // 0 | 1
const getRandomColumn = () => floor(random() * columns + 1);

let line = "";

const generateMatrixRain = async () => {
  while (true) {
    const lineLength = getRandomColumn();
    for (let i = 0; i < lineLength; i++) {
      line += getRandomNum();
    }

    console.log(matrixGreen(line));
    line = "";
    await sleep(50);
  }
};

export default generateMatrixRain;
