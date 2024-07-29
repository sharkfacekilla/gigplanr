<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('songs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->integer('length')->nullable();
            $table->string('artist')->nullable();
            $table->string('album')->nullable();
            $table->string('album_cover')->nullable();
            $table->string('album_track_number')->nullable();
            $table->integer('bpm')->nullable();
            $table->string('key')->nullable();
            $table->string('tuning')->nullable();
            $table->boolean('cover')->default(false)->nullable();
            $table->boolean('metronome')->default(false)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('songs');
    }
};
