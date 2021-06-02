<!DOCTYPE html>
<html lang="en">
  <head>
    @include('partials._header2')

    @section('stylesheets')

    <!-- Style CSS -->
    <!-- Site Icons -->
       <!-- All css files are included here. -->
    <!-- Bootstrap fremwork main css -->
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.JPG">
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css')}}">
    <!-- This core.css file contents all plugings css file. -->
    <link rel="stylesheet" href="{{ asset('css/core.css')}}">
    <!-- Theme shortcodes/elements style -->
    <link rel="stylesheet" href="{{ asset('css/shortcode/shortcodes.css')}}">
    <!-- Theme main style -->
    <link rel="stylesheet" href="{{ asset('css/style.css')}}">
     <link rel="stylesheet" href="{{ asset('css/color-1.css')}}">
    <!-- Responsive css -->
    <link rel="stylesheet" href="{{ asset('css/responsive.css')}}">
    <link href="#" data-style="styles" rel="stylesheet">
    
    <!-- Modernizr JS -->
    <script src="{{ asset('js/vendor/modernizr-2.8.3.min.js')}}"></script>
    <style>
        .responsive {
  width: 100%;
  height: auto;
}
    </style>
    
    @endsection
    
    <!-- Cookies -->
      <link rel="stylesheet" type="text/css" href="/cookies/purecookie.css" async />

  <script src="/cookies/purecookie.js" async></script>

 <style>

  body { background-color: #ccc; }

 </style>

<!-- Cookies -->
    
  </head>
  
  <body style="background-color: #fff !important; overflow-x: hidden;">
      
      <!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NFJMCZV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->







      <!-- START LOADER -->
  

      <!-- END LOADER -->

   
    @include('partials._navbar')    

     



    <div class="wrapper">  


      @yield('content')

      

    </div> <!-- end of .container --> 

    <!-- New -->

   


    <!-- New -->


   
      
      @include('partials._footer')
   

        @include('partials._javascript')

        @yield('scripts')

  </body>
</html>
