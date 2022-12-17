<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class UpdateImageController extends Controller
{
    public function upload(Request $request)
    {
        // [ file(image) , desc?]
        $imageModel = Image::create(['url' => '', 'desc' => $request->desc]);
        if ($request->hasFile('image')) {
            $image = $request->file('image'); // $request->image;
            $ext = $image->getClientOriginalExtension();
            $name = now()->timestamp . ".$ext";
            $image->storeAs('/public/images', $name);
            $imageModel->url = "/storage/images/$name";
            $imageModel->save();
            return response()->json(['status' => "ok", 'url' => $imageModel->url], 200);
        }
        return response()->json(['status' => "false", 'url' => $imageModel->url], 400);
    }
    public function images(){
        $images = Image::all();
        return response()->json($images,200);
    }
}
