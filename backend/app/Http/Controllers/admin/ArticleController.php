<?php

namespace App\Http\Controllers\admin;

use App\Models\Article;
use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use App\Models\TempImage;
use Illuminate\Support\Facades\Validator;
class ArticleController extends Controller
{
    public function index() {
        // Placeholder for index method (to be implemented)
       $articles =Article::orderBy("created_at", 'DESC')->get() ;
       return response()->json([
        'status' => true,
        'errors' => $articles
    ]);
    }

    // This method will insert article in DB
    public function store(Request $request) {
        // Merge and slugify the incoming slug value
        $request->merge(['slug' => Str::slug($request->slug)]);

        // Validate the request data
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'slug' => 'required|unique:articles,slug'
        ]);

        // If validation fails, return error messages
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'errors' => $validator->errors()
            ]);
        }

        // Create new Article instance
        $article = new Article();
        $article->title = $request->title;
        $article->slug = Str::slug($request->slug);
        $article->author = $request->author;
        $article->content = $request->content;
        $article->status = $request->status;
        $article->save();

        // Check if an imageId is provided and process the image
        if ($request->imageId > 0) {
            // Find the temp image
            $tempImage = TempImage::find($request->imageId);
            if ($tempImage != null) {
                // Get the file extension and generate a new name for the image
                $extArray = explode('.', $tempImage->name);
                $ext = last($extArray);
                $fileName = strtotime('now') . $article->id . '.' . $ext;

                // Create small thumbnail
                $sourcePath = public_path('uploads/temp/' . $tempImage->name);
                $destPathSmall = public_path('uploads/articles/small/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                // Use Image facade to make the image
                $image->resize(450, 300); // Adjusted size method
                $image->save($destPathSmall);

                // Create large thumbnail
                $destPathLarge = public_path('uploads/articles/large/' . $fileName);
                $manager = new ImageManager(Driver::class);
                $image = $manager->read($sourcePath);
                $image->resize(); // Resize width, keeping aspect ratio
                $image->save($destPathLarge);

                // Save the new image file name to the article
                $article->image = $fileName;
                $article->save();
            }
        }

        // Return success response
        return response()->json([
            'status' => true,
            'message' => 'Article added successfully'
        ]);
    }
}
