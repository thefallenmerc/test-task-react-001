<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ItemsController extends Controller
{
    private $items = [
        [
            'id' => 'PROPID1',
            'status' => 0,
            'cost' => '11,500',
            'area' => '39,443',
            'name' => 'IBC Knowledge Park III',
            'address' => 'Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012',
            'images' =>
            [
                'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                'https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            ],
            'fundingPercentage' => '100',
            'investorsCount' => '163',
            'daysRemaining' => '25',
            'rentalYield' => '9.11',
            'returnTarget' => '18.14',
            'minimumInvestment' => '25,00,000',
        ], [
            'id' => 'PROPID2',
            'status' => 1,
            'cost' => '21,500',
            'area' => '19,443',
            'name' => 'IBC Knowledge Park II',
            'address' => 'Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012',
            'images' =>
            [
                'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                'https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            ],
            'fundingPercentage' => '100',
            'investorsCount' => '163',
            'daysRemaining' => '25',
            'rentalYield' => '9.11',
            'returnTarget' => '18.14',
            'minimumInvestment' => '25,00,000',
        ], [
            'id' => 'PROPID13',
            'status' => 1,
            'cost' => '41,500',
            'area' => '29,443',
            'name' => 'IBC Knowledge Park I',
            'address' => 'Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012',
            'images' =>
            [
                'https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
            ],
            'fundingPercentage' => '100',
            'investorsCount' => '163',
            'daysRemaining' => '25',
            'rentalYield' => '9.11',
            'returnTarget' => '18.14',
            'minimumInvestment' => '25,00,000',
        ], [
            'id' => 'PROPID11',
            'status' => 1,
            'cost' => '15,500',
            'area' => '30,443',
            'name' => 'IBC Knowledge Park IV',
            'address' => 'Banerghatta Road, Jalian Wala Bagh, Near Hotel Rassion Blue, Bangalore - 140012',
            'images' =>
            [
                'https://images.unsplash.com/photo-1431512284068-4c4002298068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
                'https://images.unsplash.com/photo-1562839492-20a189fafbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            ],
            'fundingPercentage' => '100',
            'investorsCount' => '163',
            'daysRemaining' => '25',
            'rentalYield' => '9.11',
            'returnTarget' => '18.14',
            'minimumInvestment' => '25,00,000',
        ],
    ];

    public function get()
    {
        return response()->json($this->items);
    }
}
