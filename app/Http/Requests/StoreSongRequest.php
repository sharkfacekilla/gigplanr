<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSongRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'songs' => ['required', 'array'],
            'songs.*.album_track_number' => ['required', 'integer', 'max:255'],
            'songs.*.title' => ['required', 'string', 'max:255'],
            'songs.*.length' => ['required', 'integer'],
            'songs.*.album' => ['required', 'string', 'max:255'],
            'songs.*.album_cover' => ['required', 'string', 'max:255'],
            'songs.*.artist' => ['required', 'string', 'max:255'],
        ];
    }
}
