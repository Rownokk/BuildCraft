<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
Use Illuminate\Support\Facades\Validator;

class TestimonialController extends Controller
{
    
    public function index(){

    }
    public function show(){

    }
    public function store(Request $request){
        $validator = Validator::make($request ->all(),[
            'testimonial' =>'required',
            'citation' => 'required',
        ]);

        if($validator->fails()){
            return response() ->json([
                'status' =>false,
                'errors' =>$validator ->errors()
            ]);
        }
        $testimonial =new Testimonial();
        $testimonial ->citation =$request ->citation;
        $testimonial ->save() ;

        return response() ->json([
            'status' =>true,
            'message' =>'Testimonial added successfully.'
        ]);


    }

}


