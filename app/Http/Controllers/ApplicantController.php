<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    public function index()
    {
        $applicants = Applicant::all();
        return response()->json($applicants);
    }

    public function store(Request $request) {
         $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required',
            'phone' => 'required',
            'dob' => 'required',
            'qualification' => 'required',
            'gpa' => 'required',
            'school' => 'required',
            'address' => 'required',
            'coupon_applied' => 'required',
            'course_id' => 'required',
        ]);

        $applicant = Applicant::updateOrCreate(['email' => $request->email], $request->all());
        return response()->json(['message'=> 'Applicant created successfully!', 'applicantId' => $applicant->id]);
    }

    public function show($id) {
        $applicant = Applicant::find($id);
        return response()->json($applicant);
    }

    public function update(Request $request, $id) {
        Applicant::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Applicant updated successfully!']);
    }

    public function destroy($id) {
        Applicant::where('id', $id)->delete();
        return response()->json(['message'=> 'Applicant deleted successfully!']);
    }

}
