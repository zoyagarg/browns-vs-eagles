// Replace "Eagles" with "Browns"
document.body.innerHTML = document.body.innerHTML.replace(/Eagles/g, 'Browns');
document.body.innerHTML = document.body.innerHTML.replace(/Philadelphia/g, 'Cleveland');

// Replace all images
const imgs = document.getElementsByTagName("img");

for (var i = 0, l = imgs.length; i < l; i++) {
  imgs[i].src = "https://1000logos.net/wp-content/uploads/2016/10/Cleveland-Browns-logo.jpg";
}