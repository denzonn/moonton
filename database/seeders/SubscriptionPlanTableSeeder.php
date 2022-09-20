<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlan = [
            [
                'name' => 'Basic',
                'price' => 200000,
                'active_periode_in_month' => 3,
                'features' => json_encode(['feature1', 'feature2']),
            ],
            [
                'name' => 'Premium',
                'price' => 890000,
                'active_periode_in_month' => 6,
                'features' => json_encode([
                    'feature1',
                    'feature2',
                    'feature3',
                    'feature4',
                ]),
            ],
        ];

        SubscriptionPlan::insert($subscriptionPlan);
    }
}
