<?php

namespace App\Http\Controllers\front;

use App\Http\Controllers\Controller;
use App\Models\Service;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index() {
        $services=  Service::where('status',1) ->orderBy('created_at','DESC') ->get();
        return $services;  
      }
}

