<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\SubscriptionPlan;
use App\Models\UserSubscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        //Ambil data
        $subscriptionPlans = SubscriptionPlan::all();

        return inertia('User/Dashboard/SubscriptionPlan/Index', [
            'subscriptionPlans' => SubscriptionPlan::all(),
        ]);
    }

    public function userSubscribe(
        Request $request,
        SubscriptionPlan $subscriptionPlan
    ) {
        // Masukin data ke database
        $data = [
            'user_id' => Auth::id(),
            'subscription_plan_id' => $subscriptionPlan->id,
            'price' => $subscriptionPlan->price,
            'expired_date' => Carbon::now()->addMonth(
                $subscriptionPlan->active_periode_in_month
            ),
            'payment_status' => 'paid',
        ];

        // return $data;

        // Buat data ke database
        $userSubscription = UserSubscription::create($data);
        return redirect()->route('user.dashboard.index');
    }
}
