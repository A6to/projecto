<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $skills = [
            ['label' => 'Web Development', 'category' => 'Technology'],
            ['label' => 'Graphic Design', 'category' => 'Design'],
            ['label' => 'English Teaching', 'category' => 'Language'],
            ['label' => 'Photography', 'category' => 'Art'],
            ['label' => 'Financial Consulting', 'category' => 'Business'],
            ['label' => 'Carpentry', 'category' => 'Other']
        ];

        foreach ($skills as $skill) {
            Skill::create($skill);
        }
    }
}
