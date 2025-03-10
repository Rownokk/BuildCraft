<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Project;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use App\Models\TempImage;
use Illuminate\Support\Facades\File;
class ProjectController extends Controller

{
    // Function to list all projects
    public function index() 
    {
        $projects =Project::orderBy('created_at', 'DESC')->get(); 
        return response()->json([ 
     
        'status' => true, 
        'data' => $projects 
    ]); 
    }

    // Function to store a new project
    public function store(Request $request) 
    {
       // Str::slug('Dmmy title')='Dummy-title'
       $request->merge(['slug' => Str::slug($request->slug)]); 
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        $project = new Project(); 
$project->title = $request->title; 
$project->slug =Str::slug($request->slug); 
$project->short_desc= $request->short_desc; 
$project->content = $request->content; 
$project->construction_type = $request->construction_type; 
$project->sector = $request->sector; 
$project->status = $request->status; 
$project->location = $request->location; 
$project->save(); 

if($request->imageId > 0){
   
$tempImage = TempImage::find($request->imageId);
    if($tempImage !=null){


$extArray = explode('.',$tempImage->name);
$ext=last($extArray);

$fileName =strtotime('now').$project->id.'.'.$ext;


 //create small thumbnail here
 $sourcePath = public_path('uploads/temp/'.$tempImage->name);
 $destPath = public_path('uploads/projects/small/'.$fileName);
 $manager = new ImageManager(Driver::class);
 $image = $manager->read($sourcePath);
 $image->coverDown(500, 600);
 $image->save($destPath);


  //create large thumbnail here
 
  $destPath = public_path('uploads/projects/large/'.$fileName);
  $manager = new ImageManager(Driver::class);
  $image = $manager->read($sourcePath);
  $image->scaleDown(1200);
  $image->save($destPath);
  $project->image = $fileName; 
  $project->save(); 



}
}
return response()->json([ 
'status' => true, 

'message' => 'Project added successfully.' 

]); 

    }
    public function update($id, Request $request) { 
        $project =  Project::find($id); 
        if($project == null){
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);  
        }
        $request->merge(['slug' => Str::slug($request->slug)]); 
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:projects,slug,'.$id.',id'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

    
$project->title = $request->title; 
$project->slug =Str::slug($request->slug); 
$project->short_desc= $request->short_desc; 
$project->content = $request->content; 
$project->construction_type = $request->construction_type; 
$project->sector = $request->sector; 
$project->status = $request->status; 
$project->location = $request->location; 
$project->save(); 

if($request->imageId > 0){
    $oldImage= $project->image;
$tempImage = TempImage::find($request->imageId);
    if($tempImage !=null){


$extArray = explode('.',$tempImage->name);
$ext=last($extArray);

$fileName =strtotime('now').$project->id.'.'.$ext;


 //create small thumbnail here
 $sourcePath = public_path('uploads/temp/'.$tempImage->name);
 $destPath = public_path('uploads/projects/small/'.$fileName);
 $manager = new ImageManager(Driver::class);
 $image = $manager->read($sourcePath);
 $image->coverDown(500, 600);
 $image->save($destPath);


  //create large thumbnail here
 
  $destPath = public_path('uploads/projects/large/'.$fileName);
  $manager = new ImageManager(Driver::class);
  $image = $manager->read($sourcePath);
  $image->scaleDown(1200);
  $image->save($destPath);
  $project->image = $fileName; 
  $project->save(); 



}

if($oldImage != ''){
    File::delete(public_path('uploads/projects/large/'.$oldImage));
    File::delete(public_path('uploads/projects/small/'.$oldImage)); 
}
}
return response()->json([ 
'status' => true, 

'message' => 'Project updated successfully.' 

]); 
    } 
    public function show ($id){
        $project= Project::find($id);

        if($project == null){
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);  
        }

       
            return response()->json([
                'status' => true,
                'data' => $project
            ]);  
        
    }
    public function destroy ($id){
        $project= Project::find($id);

        if($project == null){
            return response()->json([
                'status' => false,
                'message' => 'Project not found'
            ]);  
        }
        File::delete(public_path('uploads/projects/large/'.$project->image));
        File::delete(public_path('uploads/projects/small/'.$project->image)); 
       
        $project->delete();
    
            return response()->json([
                'status' => true,
                'message' => 'Project deleted sucessfully'
            ]);  
        
    }
}
