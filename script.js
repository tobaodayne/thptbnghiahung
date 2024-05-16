// Tạo một số lượng đám mây ngẫu nhiên
var numberOfClouds = 5;

for (var i = 0; i < numberOfClouds; i++) {
  createCloud();
}

// Hàm tạo đám mây
function createCloud() {
  var cloud = document.createElement('div');
  cloud.className = 'cloud';
  cloud.style.top = Math.random() * 500 + 'px'; // Vị trí ngẫu nhiên theo chiều dọc
  cloud.style.animationDuration = (Math.random() * 10 + 5) + 's'; // Thời gian di chuyển ngẫu nhiên
  document.querySelector('.sky').appendChild(cloud);
}
