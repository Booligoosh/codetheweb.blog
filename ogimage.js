const WIDTH = 4096;
const HEIGHT = 2048;
const PADDING = 500;
const title = process.argv[2];
const postSlug = process.argv[3];

const { createCanvas, loadImage, registerFont } = require("canvas");
registerFont(__dirname + "/ogimage-fonts/Roboto_Mono/RobotoMono-Bold.ttf", {
  family: "Roboto Mono"
});
const canvas = createCanvas(WIDTH, HEIGHT);
const ctx = canvas.getContext("2d");

// Draw post cover
// const image = await loadImage(imagePath);
// ctx.filter = 'blur(500px)'
// ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, WIDTH, HEIGHT);
// ctx.filter = 'blur(0px)'

// Draw overlay
ctx.fillStyle = "hsl(7, 80%, 98%)";
ctx.fillRect(0, 0, WIDTH, HEIGHT);

// Write text
drawText(ctx);

// Save image
const fs = require("fs");
const out = fs.createWriteStream(
  __dirname + `/assets/img/og-images/posts/${postSlug}.png`
);
const stream = canvas.createPNGStream();
stream.pipe(out);
out.on("finish", () => console.log(postSlug + ".png was created"));

function drawText(ctx) {
  ctx.fillStyle = "hsl(12, 79%, 72%)";
  ctx.font = "200px 'Roboto Mono'";
  ctx.textBaseline = "top";
  const maxWidth = WIDTH - PADDING * 2;
  const words = title.split(" ");
  const lines = [];
  let fits = true;
  while (words.length > 0) {
    let line = "";
    let i;
    for (i = 0; i < words.length; i++) {
      line += (i === 0 ? "" : " ") + words[i];
      if (ctx.measureText(line).width > maxWidth) {
        fits = false;
        break;
      }
    }
    const goodIndex = fits ? i : i - 1;
    const wordsForLine = words.splice(0, Math.max(1, goodIndex + 1));
    // console.log(i, line, ctx.measureText(line).width, maxWidth);
    lines.push(wordsForLine.join(" "));
  }
  // console.log(lines);
  const final = lines.join("\n");
  const { emHeightAscent, emHeightDescent } = ctx.measureText(final);
  const textBoxHeight = emHeightDescent + emHeightAscent;
  const y = (HEIGHT - textBoxHeight) / 2;
  ctx.fillText(final, PADDING, y);
  ctx.font = "100px 'Roboto Mono'";
  ctx.fillStyle = "hsla(12, 79%, 72%, 0.5)";
  ctx.textBaseline = "bottom";
  ctx.fillText("Code The Web", PADDING, y - 25);
}
