<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;


class AuthenticationController extends Controller
{
    public function authenticate(Request $request){
        // Apply Validation
        $validator = Validator::make($request->all(),[
          'email' => 'required|email',
          'password' => 'required',
        ]);
        if($validator->fails()){
            return response()->json([
              'status' => false,
              'errors' => $validator->errors()
            ]);
        }
        else {
            $credentials = [
               'email' => $request->email,
               'password' => $request->password,
            ];
            if (Auth::attempt($credentials)){
            
            }else{
                return response()->json([
                    'status' => false,
                    'message' => 'Either email/password is incorrect.'
                  ]); 
            }
        }
    }
}
