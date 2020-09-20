'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 30;
const GORIZONTAL_GAP = 50;
const TEXT_HEIGHT = 15;
const BAR_WIDTH = 40;
const BAR_HEIGHT = CLOUD_HEIGHT - TEXT_HEIGHT * 4 - GAP * 2;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

window.renderStatistics = function (ctx, players, times) {

  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, `rgba(0, 0, 0, 0.7)`);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

  ctx.fillStyle = `#000`;
  ctx.font = `PT MONO`;
  ctx.fillText(
      `Ура вы победили!`,
      CLOUD_X + GAP, CLOUD_Y + GAP
  );

  ctx.fillText(
      `Список результатов:`,
      CLOUD_X + GAP, CLOUD_Y + GAP + TEXT_HEIGHT
  );

  let maxTime = getMaxElement(times);

  for (let i = 0; i < players.length; i++) {
    let playerName = players[i];
    let barHeight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + GORIZONTAL_GAP + (BAR_WIDTH + GORIZONTAL_GAP) * i,
        CLOUD_HEIGHT - barHeight - GAP - TEXT_HEIGHT
    );

    ctx.fillStyle = `hsl(0, 100%, 50%)`;
    if (i > 0) {
      ctx.fillStyle = `hsl(240, 100%,` + getRandomInt(100) + `%)`;
    }

    ctx.fillRect(
        CLOUD_X + GORIZONTAL_GAP + (BAR_WIDTH + GORIZONTAL_GAP) * i,
        CLOUD_Y + GAP + TEXT_HEIGHT * 3 + BAR_HEIGHT,
        BAR_WIDTH,
        -barHeight
    );

    ctx.fillStyle = `#000`;
    ctx.fillText(
        playerName,
        CLOUD_X + GORIZONTAL_GAP + (BAR_WIDTH + GORIZONTAL_GAP) * i,
        CLOUD_Y + GAP + TEXT_HEIGHT * 4 + BAR_HEIGHT
    );
  }
};


