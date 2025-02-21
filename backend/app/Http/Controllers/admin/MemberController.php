<?php

namespace App\Http\Controllers\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Member; // Also make sure to import your Member model

class MemberController extends Controller
{ 
    //this method will return all members
    public function index() {
     
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
