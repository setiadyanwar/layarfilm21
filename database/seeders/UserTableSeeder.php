<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@test.com',
            'password' => bcrypt('admin'),
        ]);
        $admin->assignRole('admin');
        $user = User::create([
            'name' => 'setiady',
            'email' => 'setiady@test.com',
            'password' => bcrypt('password'),
        ]);
        $user->assignRole('user');
    }
}
