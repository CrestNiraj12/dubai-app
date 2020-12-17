<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicantsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applicants', function (Blueprint $table) {
            $table->id();
            $table->string('firstname');
            $table->string('lastname');
            $table->string('email')->unique();
            $table->string('phone');
            $table->date('dob');
            $table->string('qualification', 10, 2);
            $table->decimal('gpa', 3, 2);
            $table->text('school', 10, 2);
            $table->text('address', 10, 2);
            $table->boolean('coupon_applied');
            $table->boolean('payment_made')->default(false);
            $table->timestamps();
        });

        Schema::table('applicants', function (Blueprint $table) {
            $table->foreignId('course_id')->constrained('courses');
            $table->foreignId('coupon_id')->nullable()->constrained('coupons');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applicants');
    }
}
