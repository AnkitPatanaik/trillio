var bw = 320;
var bh = 320;
var p = 0;
var size = 40;

var w = ~~ (bw / size);
var h = ~~ (bh / size);

var state = new Array(h);
for (var y = 0; y < h; ++y) {
    state[y] = new Array(w);
    state[y].fill(false);
}

function fill(s, gx, gy, ctx) {
      ctx.fillStyle = s;
      ctx.fillRect(gx * size, gy * size, size, size);
}

function clear(gx, gy, ctx) {
      ctx.clearRect((gx * size) + 1, (gy * size) + 0.5 , size - 0.5, size - 0.5);
}

function drawBoard(canvas, context){
        for (var x = 0; x <= bw; x += 40) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (var x = 0; x <= bh; x += 40) {
              context.moveTo(p, 0.5 + x + p);
              context.lineTo(bw + p, 0.5 + x + p);
        }

        context.strokeStyle = "black";
        context.stroke();
}

function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}
