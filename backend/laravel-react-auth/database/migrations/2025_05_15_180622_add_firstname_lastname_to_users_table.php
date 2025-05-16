<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
public function up()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('firstname')->after('id'); // Adds firstname column
        $table->string('lastname')->after('firstname'); // Adds lastname column
        $table->dropColumn('name'); // Removes the default 'name' column
    });
}

public function down()
{
    Schema::table('users', function (Blueprint $table) {
        $table->string('name')->after('id'); // Bring back 'name' if rolling back
        $table->dropColumn(['firstname', 'lastname']);
    });
}
};
