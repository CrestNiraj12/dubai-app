<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
   
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.JPG">
    
    <!-- All css files are included here. -->
    <!-- Bootstrap fremwork main css -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">
    <!-- This core.css file contents all plugings css file. -->
    <link rel="stylesheet" href="{{ asset('css/core.css')}}">
    <!-- Theme shortcodes/elements style -->
    <link rel="stylesheet" href="{{ asset('css/shortcode/shortcodes.css')}}">
    <!-- Theme main style -->
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
    <!-- Responsive css -->
    <link rel="stylesheet" href="{{ asset('css/responsive.css')}}">
    <link href="#" data-style="styles" rel="stylesheet">
    
    <style>
        .navy-bg {
    background: #203860;
}
    </style>
    
    <style>
    
    /* ============================================================
                    Removing the default Radio button
==============================================================*/

.accordion_menus input {
    display: none;
}
/* ============================================================
                    Adding some beauty
==============================================================*/

.accordion_menus {
  background: #203860;
  width: 50%;
  margin: 10px auto 30px auto;
  border-radius: 5px;
  color: white;
}

.accordion_menus label {
  display: block;
  height: 86px; 
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  padding: 1.5em 1.5em;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
}
/* ============================================================
                    Hiding the content section
==============================================================*/
.accordion_menus section {
    background: white;
    color: #3f3c3c;;
    overflow: hidden;
    padding-left: 3vw;
    height:0;
    transition:height 0.3s ease-in-out;
}
/* ============================================================
  Displaying the hidden cotent once button is selected/checked
==============================================================*/
.accordion_menus input:checked ~ section {
    height:auto;
}
/* ============================================================
                    Adding drop down icon
==============================================================*/

.accordion_menus label::after,.accordion_menus input:checked + label:hover:after {
  font-family: "FontAwesome";
  content: "\f13a";
  padding:2px 2px 2px 2px;
  font-size: 1.5em;
  float: right;
  transition: .3s all;
  transform: rotate(-180deg);
}
/* ============================================================
                   Hover effects 
==============================================================*/
.accordion_menus label:hover {
     background: #d44752;
}
.accordion_menus input:checked + label{
  background: #203860;
  color: white;
}

.accordion_menus label:hover:after{
    color:white;
    transform: rotate(0deg);
}


/* ============================================================
                    Sub-heading CSS 
==============================================================*/
.accordion_menus .accordion_menus{
  display:none;
  width:100%;
  margin:0;
  padding:0;
  background: #d44752;
  color: black;
}
.accordion_menus .accordion_menus label:after{
  color:Black;
}
.accordion_menus input:checked +label +section +.accordion_menus{
  display:block;
}
.accordion_menus .accordion_menus label:hover{
  background-color:#203860;
}
.accordion_menus .accordion_menus input:checked +label{
  background-color: #3db166;
};
   
</style>
    
    <!-- Modernizr JS -->
    <script src="{{ asset('js/vendor/modernizr-2.8.3.min.js')}}"></script>
    
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NN8HDG6LBZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-NN8HDG6LBZ');
</script>

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
 fbq('init', '3448682115241226'); 
fbq('track', 'PageView');
</script>
<noscript>
 <img height="1" width="1" 
src="https://www.facebook.com/tr?id=3448682115241226&ev=PageView
&noscript=1"/>
</noscript>
<!-- End Facebook Pixel Code -->

<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NFJMCZV');</script>
<!-- End Google Tag Manager -->


<style>
   .slick-dots 
     {
    display: block;
    margin-top: 0px;
    /* top: 260px; */
    
}
    
</style>




</head>



