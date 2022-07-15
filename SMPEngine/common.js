// here will be all common variables, used by many scripts
// this script is created separately to avoid cross dependency

const canvas = document.getElementById('gameCanvas');
canvas.toDataURL('image/png', 1.0);

const ctx = canvas.getContext('2d');

export { canvas, ctx };