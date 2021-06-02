<?php 



namespace App\Http\Controllers;



use Illuminate\Http\Request;



use App\Http\Requests;
use App\Models\Carousel;
use App\Models\Course;
use App\Models\Page;
use App\Post;

use Mail;

use Session;



class PagesController extends Controller {

	public function getLandingPage() {
		$carousel = Carousel::all();
		return view('/pages/landing-page', ['carousel' => $carousel]);
	}

	public function getIndex() {

		$posts = Post::orderBy('created_at', 'desc')->limit(4)->get();

		return view('pages.welcome')->withPosts($posts);

	}

	public function getPage($slug) {

		$page = Page::where('slug', $slug)->first();

		return isset($page) ? view('pages.page', ['page' => $page]) : $this->getLandingPage();

	}



	public function getAbout() {

		return view('pages.about');

	}



	public function getContact() {

		return view('pages.contact');

	}
	
	
		public function getEnquiry() {

		return view('pages.enquiry');

	}




	public function getMdp() {

		return view('pages.mdb');

	}





	public function getCsdp() {

		return view('pages.csdp');

	}



	public function getFdp() {

		return view('pages.fdp');

	}



	public function getEfg() {

		return view('pages.efg');

	}



	public function getCds() {

		return view('pages.cds');

	}



	

	public function getBankFinance() {

		return view('pages.banking-finance');

	}



	public function getImp() {

		return view('pages.imp');

	}



	public function getSactivity() {

		return view('pages.summer-activity');

	}





	public function getInternship() {

		return view('pages.internship');

	}





	public function getClife() {

		return view('pages.campus-life');

	}



	public function getGallery() {

		return view('pages.gallery');

	}



	

// Course Pages Routes



	public function getPearsonHNDHNC() {

		return view('pages.courses.pearson-hnd-hnc');

	}

	

		public function getTQUKHNDHNC() {

		return view('pages.courses.tquk-hnd-hnc');

	}

	

		public function getTQUKDET() {

		return view('pages.courses.tquk-det');

	}

	

		public function getValueInvesting() {

		return view('pages.courses.value-investing');

	}

	public function getCourse($slug) {
		$course = Course::where('slug', $slug)->first();
		return view('pages.courses.course', ['course' => $course]);

	}
	
	
	public function getMsgPrincipal() {
	    
	    return view('pages.message-from-principal');
	}
	
	
		public function getCareer() {
	    
	    return view('pages.career');
	}
	
	    public function getApplication() {
	        return view('pages.applicationform');
	    }
	    
	    
	    
	    public function getCoronaInfo() {
	        return view('pages.coronavirus-info');
	    }
	    
	    
	    public function getSSdUAE() {
	        return view('pages.ssd-dubai');
	        
	    }
	    
	    
	    public function getSSdUK() {
	        return view('pages.ssd-uk');
	        
	    }
	    
	    
	    public function getPartnerUs() {
	        return view('pages.partner-with-us');
	    }
	    
	    
	    
	    // thank you pages
	    
	    
	     public function getThankUs() {
	        return view('pages.thankyou');
	    }
	    
	    
	     public function getThanksUs() {
	        return view('pages.enquiry-thankyou');
	    }
	    
	    
	     public function getThankssUs() {
	        return view('pages.application-thankyou');
	    }
	    
	    
	    public function getRegistration() {
	        return view('pages.registration');
	    }
	    
	    
	    
	    
	    
	    
	
	







	



	



	 



}