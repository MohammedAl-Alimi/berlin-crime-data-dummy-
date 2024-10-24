const DATASET_PATH = "data/berlin-data-extended.csv";

init();

function init() {
  loadData().then((result) => {
    dataset = result;
  });
}

// Loading the data in a JS Promise
function loadData() {
  return new Promise((resolve, reject) => {
    d3.csv(DATASET_PATH).then(function (data) {
      resolve(data);
    });
  });
}
