// Main JS placeholder
document.addEventListener('DOMContentLoaded', function () {
    console.log('Main JS loaded');
});


const values = [25, 25, 3, 10, 15, 5, 5, 2, 2, 5];
const colors = [
    "#00FF99", "#5751B3", "#FF9304",
    "#FFFFFF", "#FF0404", "#302D96", "#FF04C9", "#87BD23", "#2947BE", "#D40D6D", "#FDE006"
];

function drawGraph() {
    const canvas = document.getElementById("arcGraph");
    const container = document.querySelector(".graph-container");

    // Set canvas resolution to container size
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext("2d");

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    const radius = canvas.width * 0.35; // responsive radius
    const lineWidth = canvas.width * 0.03; // responsive thickness

    const GAP_ANGLE = 0.1;

    const total = values.reduce((a, b) => a + b, 0);
    let startAngle = -Math.PI / 2;

    values.forEach((v, i) => {
        let sliceAngle = (v / total) * Math.PI * 2;

        let adjustedSlice = sliceAngle - GAP_ANGLE;
        if (adjustedSlice < 0) adjustedSlice = 0;

        let endAngle = startAngle + adjustedSlice;

        ctx.beginPath();
        ctx.strokeStyle = colors[i];
        ctx.lineWidth = lineWidth;
        ctx.lineCap = "round";
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.stroke();

        startAngle = endAngle + GAP_ANGLE;
    });
}

// Draw initial
drawGraph();

// Redraw on window resize (responsive)
window.addEventListener("resize", drawGraph);

