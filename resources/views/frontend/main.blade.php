<!DOCTYPE html>
<html lang="en">
  <head>
    @include('frontend.partials._header')

    @section('stylesheets')

    <!-- Style CSS -->
    <!-- Site Icons -->
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <link rel="apple-touch-icon" href="images/apple-touch-icon.png">

    <!-- Bootstrap CSS -->

   <!-- Site CSS -->
   <link rel="stylesheet" href="{{ asset('assets/css/bootstrap.min.css')}}">
   <link rel="stylesheet" href="{{ asset('assets/css/fontawsom-all.min.css') }}">
   <link rel="stylesheet" href="{{ asset('assets/plugins/slider/css/owl.carousel.min.css') }}">
   <!-- Colors CSS -->
   <link rel="stylesheet" href="{{ asset('assets/plugins/slider/css/owl.carousel.min.css') }}">
   <!-- ALL VERSION CSS -->
   <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
   <!-- Responsive CSS -->
   <link rel="stylesheet" href="{{ asset('assets/css/style.css') }}">
   <!-- Custom CSS -->
   <link rel="stylesheet" href="{{ asset('assets/plugins/slider/css/owl.theme.default.css') }}">
   <link rel="stylesheet" href="{{ asset('css/stylo.css') }}">  
   <!-- Modernizer for Portfolio -->
   <script src="../js/modernizer.js"></script>
   <style type="text/css">
    .doctor-message .inner-lay {
      background-color: rgb(31, 56, 96);
      padding: 50px;
      color: #FFF;
            }

 
   </style>
    @endsection
  </head>
  
  <body style="background-color: #fff !important;">

      <!-- START LOADER -->
       <div id="preloader">
         <img class="preloader" height="" width="100%" src="{{ url('img/TWC Logo Color.png') }}" alt="The Woolwich College UK" align="center" style="padding-left: 20px ; padding-right: 20px;"><br><br><br><br>

         <br><br><br><br><br><br><br><br><br><br><br><br>
         <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
  <circle fill="#1f3860" stroke="none" cx="6" cy="50" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 15 ; 0 -15; 0 15" 
       repeatCount="indefinite" 
       begin="0.1"/>
  </circle>
  <circle fill="#dc3545" stroke="none" cx="30" cy="50" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 10 ; 0 -10; 0 10" 
       repeatCount="indefinite" 
       begin="0.2"/>
  </circle>
  <circle fill="#3cba54" stroke="none" cx="54" cy="50" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 5 ; 0 -5; 0 5" 
       repeatCount="indefinite" 
       begin="0.3"/>
  </circle>
</svg>


      </div>
   <!-- <span id="splash-overlay" class="splash"></span>
     <span id="welcome" class="z-depth-4"></span> -->

      <!-- END LOADER -->

   
    @include('frontend.partials._navbar')    

    <div class="content">
     

      @yield('content')

      

    </div> <!-- end of .container --> 

    <!-- New -->

   


    <!-- New -->


    <div>
      
      @include('frontend.partials._footer')
    </div>

        @include('frontend.partials._javascript')

        @yield('scripts')

  </body>
</html>
