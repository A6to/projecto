<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->string('label', 100); // Skill name (e.g., "Web Development")
            $table->string('category', 50); // Category (e.g., "Technology")
            $table->timestamps(); // Adds created_at and updated_at columns

            // Optional indexes for better performance
            $table->index('category');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down()
    {
        Schema::dropIfExists('skills');
    }
};
