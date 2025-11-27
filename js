// 1. IMAGE ARRAY
const images = [
  "https://cdn1.ozone.ru/s3/multimedia-1-c/7480482852.jpg",
  "https://avatars.mds.yandex.net/i?id=fba04600f6a81452ec28606c60f48da17a9eec32-5896019-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=81b787c41bc4cccadb414409cbf3de716f7bff81-5419733-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=66f66c32e529cebcbd9ff0f84aa75428817e6e4d-12484384-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=bc2d4475f9b54dad43129044ffd42d5ec082d735-5317911-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=dbf1e6057ecfca69f42876f393cd754efe21100a-7978669-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=5b1b5d1a2afc96f2440990ff44301092dcbf6b54-7025901-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=39a50e4259a8333361cc47543ce3eaf7460b4848-12500642-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=eecc666747a813c31d707be16fee4ccfb2519482-8427500-images-thumbs&n=13",
  "https://avatars.mds.yandex.net/i?id=420f517367decdb1ad4af37a65fbc6862c601fa6-5865828-images-thumbs&n=13"
];

// 2. TARGET DOM ELEMENTS WITH DATA ATTRIBUTES

// 3. TARGET BUTTONS AND IMAGES
const leftImg = document.querySelector('[data-left-img]');
const rightImg = document.querySelector('[data-right-img]');
const prevBtn = document.querySelector('[data-prev-btn]');
const nextBtn = document.querySelector('[data-next-btn]');



let currentIndex = 0;
