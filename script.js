const swiper = new Swiper('.swiper-container', {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const fetchUrl = 'http://rekrutacjartb.pl/developer/banner.json';

fetch(fetchUrl).then(function(response){
  return response.json()
}).then(function(res){
    const nums = [0,1,2,3,4,5];
    const imgAmount = 3;
    let numItem = 0;

while (nums.length > imgAmount) {
    numItem = Math.floor(Math.random() * (nums.length + 1));
    nums.splice(numItem,1);
}

document.getElementById('1').innerHTML = `<img src=${res.offers[nums[0]].imgURL}>
<p>${res.offers[nums[0]].name}</p>
<p>${res.offers[nums[0]].price} zł</p>
<div class="btn"><span>Check</span></div>`

document.getElementById('2').innerHTML = `<img src=${res.offers[nums[1]].imgURL}>
<p>${res.offers[nums[1]].name}</p>
<p>${res.offers[nums[1]].price} zł</p>
<div class="btn"><span>Check</span></div>`

document.getElementById('3').innerHTML = `<img src=${res.offers[nums[2]].imgURL}>
<p>${res.offers[nums[2]].name}</p>
<p>${res.offers[nums[2]].price} zł</p>
<div class="btn"><span>Check</span></div>`
})