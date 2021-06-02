<script src="assets/js/jquery-3.2.1.min.js"></script>
<script src="assets/js/popper.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/plugins/slider/js/owl.carousel.min.js"></script>
<script src="assets/js/script.js"></script>
<script src="{{asset('js/popper.min.js')}}"></script>

 <script src="{{asset('js/all.js')}}"></script>
      <!-- all plugins -->
 <script src="{{asset('js/custom.js')}}"></script>
      <!-- map -->

<script>
	window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-head");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>

<div id='tawk_5e7da8f069e9320caabd86c9'></div>
<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5e7da8f069e9320caabd86c9/1e4djftv6';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->
<!--End of Tawk.to Script-->
<!--End of Tawk.to Script-->
<!--<script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="fe40ab27-c513-4a48-9951-e63703081c51";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script> -->


<!--<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script type="text/javascript">
$(window).load(function() { $(".preload-wrapper").fadeOut("slow"); })
</script>



<script>
$(function () {
  $('[data-toggle="popover"]').popover();
  
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
  $('.cvc-preview-container').on('click', function(){
    $(this).addClass('hide');
  });
});
</script> -->


<script type="text/javascript">
	
	$(function () {
  $('[data-toggle="popover"]').popover();
  
  $('#cvc').on('click', function(){
    if ( $('.cvc-preview-container').hasClass('hide') ) {
      $('.cvc-preview-container').removeClass('hide');
    } else {
      $('.cvc-preview-container').addClass('hide');
    }    
  });
  
  $('.cvc-preview-container').on('click', function(){
    $(this).addClass('hide');
  });
});
</script>

<script type="text/javascript">
  var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // IF accordion is open - close it
      content.style.maxHeight = null;
    } else {
      // ELSE accordion is closed - so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

</script>



