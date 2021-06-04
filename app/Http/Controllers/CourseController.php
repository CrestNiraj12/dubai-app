<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function index()
    {
        $courses = Course::all();
        return response()->json($courses);
    }

    public function store(Request $request) {
        $request->validate([
            'title'        => 'required',
            'description'  => 'required',
            'facts'        => 'required',
            'requirements' => 'required',
            'thumbnail'        => 'required',
            'yearly_fee'   => 'required',
            'uni_fee'      => 'required'
        ]);
        
        Course::create($request->all());
        return response()->json(['message'=> 'Course created successfully!']);
    }

    public function show($id) {
        $course = Course::find($id);
        return response()->json($course);
    }

    public function update(Request $request, $id) {
        Course::where('id', $id)->update($request->all());
        return response()->json(['message'=> 'Course updated successfully!']);
    }

    public function destroy($id) {
        Course::where('id', $id)->delete();
        return response()->json(['message'=> 'Course deleted successfully!']);
    }

    public function getCourseEnrollment($id) {
        $course = Course::find($id);
        return view('pages.enroll', ['course' => $course]);
    }

}
