<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Member; 
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;

class MemberController extends Controller
{ 
    //this method will return all members
    public function index() {
        $members = Member::orderBy('created_at','DESC')->get();
        return response()->json([
            'status' => true,
            'data' => $members
          ]);
    }
    //this method will store/insert all members
    public function store(Request $request) {
      $validator = Validator::make($request->all(),[
        'name' => 'required',
        'job_title' => 'required',
      ]);
      if($validator->fails()){
        return response()->json([
          'status' => false,
          'errors' => $validator->errors()
        ]);
      }
      $member = new Member();
      $member->name = $request->name;
      $member->job_title = $request->job_title;
      $member->linkedin_url = $request->linkedin_url;
      $member->status = $request->status;
      $member->save();

      if($request->imageId > 0){
        
    $tempImage = TempImage::find($request->imageId);
        if($tempImage !=null){
    
    
    $extArray = explode('.',$tempImage->name);
    $ext=last($extArray);
    
    $fileName =strtotime('now').$member->id.'.'.$ext;
    
    
     //create small thumbnail here
     $sourcePath = public_path('uploads/temp/'.$tempImage->name);
     $destPath = public_path('uploads/members/'.$fileName);
     
     $manager = new ImageManager(new \Intervention\Image\Drivers\Gd\Driver());
// Force GD driver

     $image = $manager->read($sourcePath);
     $image->coverDown(400, 500);
     $image->save($destPath);
     $member->image= $fileName;
     $member->save();
    
      
    
    }
    }

      return response()->json([
        'status' => true,
        'message' => "Member added successfully"
      ]);
      
    }

    //this method will return single member data
    public function show() {

    }
    //this method will update a single member data
    public function update() {

    }
    //this method will delete a member
    public function destroy() {

    }
}
