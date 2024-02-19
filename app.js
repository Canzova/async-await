console.log("start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolves 10 sec");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First promise resolves 20 sec");
  }, 20000);
});

function timepass() {
  console.log("I am Working");
}

async function showData() {
  console.log("Before completing Promise one");
  const v1 = await p1;
  console.log(v1);

  console.log("Before completing Promise two");
  const v2 = await p2;
  console.log(v2);
}

showData();
timepass();
