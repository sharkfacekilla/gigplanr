<?php

use App\Models\User;
use Inertia\Inertia;
use App\Http\Controllers;
use App\Mail\EmailVerify;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MailController;
use App\Http\Controllers\ProfileController;
use Tests\Feature\Auth\EmailVerificationTest;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Foundation\Auth\EmailVerificationRequest;


//Home Page
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


//Dashbaord Page (Probably will be unused)
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

//Profile Management Page
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
   
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



//Admin Routes
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/library', function () {
        return Inertia::render('Admin/Library/Library');
    })->name('library');
});

//Visitor Routes



//Email Routes from docs
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');
 
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();
 
    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();
 
    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');



//Test Routes
//Test render for email verification, delete this later.
Route::get('/verify-test', function () {
    // Get a user for demo purposes
    $user = User::find(1);

    if (!$user) {
        return 'User not found!';
    }

    // Send the verification notification
    $user->notify(new VerifyEmail);
    
    $notification = new VerifyEmail;
    $notificationView = $notification ->toMail($user)->render();
    // return 'sent';
    return response($notificationView);
});

require __DIR__.'/auth.php';
