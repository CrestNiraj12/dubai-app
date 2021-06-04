@extends('main')

@section('title', '| Homepage')

@section('stylesheets')

@endsection


@section('content')

<section class="breadcrumbs-area bg-3 ptb-110 bg-opacity bg-relative">
    <div class="container">
        <div class="row">
            <div class="col-md-12 text-center">
                <div class="breadcrumbs">
                    <h2 class="page-title">Enquiry Form</h2>
                    <ul>
                        <li>
                            <a class="active" href="#">Home</a>
                        </li>
                        <li>Enquiry Form</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Start page content -->
<section class="contact-area">
    <div class="container-fluid">
        <div class="row">

        </div>
        <div class="row">
            <div class="col-lg-12 col-offset-6 col-sm-9">
                <div class="conract-area-bottom">
                    <!--    <h3 align="center" class="main-contact">Enquiry Form</h3>
                            <form id="contact-form" action="#" method="post">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="main-input">
                                            <input name="name" placeholder="Name*" type="text">
                                            <i class="icofont icofont-hotel-boy"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="main-input mrg-eml">
                                            <input name="email" placeholder="Email*" type="email">
                                            <i class="icofont icofont-envelope"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                       <div class="main-input mt-20 mb-20">
                                            <input name="subject" placeholder="Subject*" type="text">
                                            <i class="icofont icofont-pencil"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="text-leave2">
                                            <textarea name="message" placeholder="Type Your Message......."></textarea>
                                            <button class="submit" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form> -->

                    <div id="zf_div_LeImRrfZ3-c_shwX7N2A2XmFsJ1JilAvc2QjnF3KtF8"></div>
                    <script type="text/javascript">
                        (function() {
try{
var f = document.createElement("iframe");   
f.src = 'https://forms.zohopublic.com/thewoolwichinstitute/form/TWIEnquiryForm/formperma/LeImRrfZ3-c_shwX7N2A2XmFsJ1JilAvc2QjnF3KtF8?zf_rszfm=1';
f.style.border="none";                                           
f.style.height="1963px";
f.style.width="100%";
f.style.transition="all 0.5s ease";// No I18N
var d = document.getElementById("zf_div_LeImRrfZ3-c_shwX7N2A2XmFsJ1JilAvc2QjnF3KtF8");
d.appendChild(f);
window.addEventListener('message', function (){
var zf_ifrm_data = event.data.split("|");
var zf_perma = zf_ifrm_data[0];
var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
var iframe = document.getElementById("zf_div_LeImRrfZ3-c_shwX7N2A2XmFsJ1JilAvc2QjnF3KtF8").getElementsByTagName("iframe")[0];
if ( (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
var prevIframeHeight = iframe.style.height;
if ( prevIframeHeight != zf_ifrm_ht_nw ) {
iframe.style.height = zf_ifrm_ht_nw;
}   
}
}, false);
}catch(e){}
})();
                    </script>









                    <p class="form-messege"></p>
                </div>
            </div>
            <!-- <div class="col-md-4 col-sm-4">
                        <div class="communication-all pt-110">
                            <h3 class="main-contact">Address</h3>
                            <div class="single-communication mb-20">
                                <div class="communication-icon">
                                    <i class="icofont icofont-social-google-map"></i>
                                </div>
                                <div class="communication-text">
                                    <p> G-35, Block 2A, Knowledge Park </p>
                                    <p>Dubai</p>
                                </div>
                            </div>
                            <div class="single-communication mb-20">
                                <div class="communication-icon">
                                    <i class="icofont icofont-ui-call"></i>
                                </div>
                                <div class="communication-text">
                                    <p>+97-142769068</p>
                                    <p> +97-1502918734</p>
                                </div>
                            </div>
                            <div class="single-communication">
                                <div class="communication-icon">
                                    <i class="icofont icofont-envelope"></i>
                                </div>
                                <div class="communication-text">
                                    <p>
                                        <a href="mailto:info@thewoolwichinstitute.com">info@thewoolwichinstitute.com</a> <br>
                                     
                                    </p>
                                </div>
                            </div>
                            
                        
                        </div>
                    </div> -->
            <br><br>
            <!-- New -->
            <!-- <div class="col-md-4 col-sm-4" style="top: 40px;">
                            <h3 class="main-contact">Opening Hours</h3>
                            <div class="single-communication">
                                <div class="communication-icon">
                                    <i class="icofont icofont-time"></i>
                                </div>
                                <div class="communication-text">
                                    <p>
                                    Sunday  &nbsp;&nbsp;  8:00 AM–5:00 PM <br/>
                                    Monday  &nbsp;&nbsp; 8:00 AM–5:00 PM <br/>
                                    Tuesday &nbsp;&nbsp;  8:00 AM–5:00 PM <br/>
                                    Wednesday &nbsp;&nbsp;  8:00 AM–5:00 PM <br/>
                                    Thursday  &nbsp;&nbsp;  8:00 AM–5:00 PM <br/>
                                    Friday    &nbsp;&nbsp;     Closed <br/>
                                    Saturday         Closed <br/>

                                    </p>
                                </div>
                            </div></div> -->
            <!-- New -->
        </div>
    </div>
</section>
<!-- End page content -->

@endsection