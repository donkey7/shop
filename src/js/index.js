var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true, // 循环模式选项
    autoplay: 2000,
})
var o_input = document.querySelector("#input-1")
console.log(o_input)
o_input.onfocus = function (){
    this.value = "";
}
o_input.onblur = function (){
    this.value = "请输入商品名称或货号";
}

var mySwiper = new Swiper ('.swiper-lbt', {
    direction: 'horizontal', // 横屏切换选项
    loop: true, // 循环模式选项
    autoplay: 5000,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
   
  })