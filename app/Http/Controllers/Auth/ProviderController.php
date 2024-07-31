<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{
    public function redirect($provider) 
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            $newUser = Socialite::driver($provider)->user();
            dd($newUser);
            if (User::where('email', $newUser->getEmail())->exists() && !User::where(['provider' => $provider, 'provider_id' => $newUser->id])->exists()) {
                
                return redirect()->route('login')->withErrors(['email' => 'This email uses a different method to login.']);
            }
            $user = User::where([
                'provider' => $provider,
                'provider_id' => $newUser->id
            ])->first();

            if(!$user) {
                $user = User::create([
                    'name' => $newUser->getName(),
                    'email' => $newUser->getEmail(),
                    'username' => $newUser->getNickname(),
                    'provider' => $provider,
                    'provider_id' => $newUser->getId(),
                    'provider_token' => $newUser->token,
                ]);
                $user->email_verified_at = now();
                $user->save();
            }
            
            Auth::login($user);
            
            return redirect('/dashboard');

        } catch(\Exception $e) {
            return redirect('/login');
        }
    }
}
