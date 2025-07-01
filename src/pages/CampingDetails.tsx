
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Share, Heart, MapPin, Users, Car, Tent, Wifi, Bath, Utensils, Calendar, Clock, Shield, PawPrint, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const CampingDetails = () => {
  const { id } = useParams();

  // Mock data - in real app this would come from API
  const campingData = {
    id: 1,
    name: 'Brisbane North Campground',
    location: 'Brisbane, Queensland, Australia',
    rating: 4.8,
    reviewCount: 127,
    hostName: 'Alisha M.',
    hostExperience: '29 Guests trips',
    price: 56,
    images: [
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg',
      '/placeholder.svg'
    ],
    description: 'Come and stay in our affordable, clean and convenient suburban location in Australia\'s sunshine State! We are 10 minutes from Queensland\'s iconic theme parks, go-karting track and Brisbane and Gold Coast Beaches and parks. We\'re one of the few camp/site close to the CBD - offering easy access to the vibrant city of Brisbane via a comfortable bus ride.',
    vehicleDetails: [
      'Caravans, Camper Trailers, Motorhomes, Campervans, and Cars allowed',
      'Vehicles under 7 metres allowed',
      'Back in site',
      'Accommodates slideouts',
      'Surface type: concrete pad',
      'Surface: wireless free'
    ],
    whatToExpect: [
      { icon: '🚽', label: 'RV site', description: 'Cement, pre-marked or designed area' },
      { icon: '👥', label: 'Guests not per site' },
      { icon: '🚽', label: 'Toilet available' },
      { icon: '🐕', label: 'Pets allowed' },
      { icon: '🔥', label: 'No campfire' },
      { icon: '💧', label: 'Potable water available' }
    ],
    thingsToKnow: {
      gettingThere: [
        { label: 'Check in: After 3:00 PM' },
        { label: 'Early or late check-in may be available' },
        { label: 'Call or email to coordinate' },
        { label: 'GPS not 100% accurate' },
        { label: 'Cancellation policy: Flexible' },
        { label: 'Minimum nights: 1 night' },
        { label: 'Accepts bookings: Up to months out' }
      ],
      duringTrip: [
        { icon: '📍', label: 'Leave a Section' },
        { icon: '🛡️', label: 'Protection policy', description: 'We have a zero tolerance policy against discrimination of any kind. We are committed to providing equal service to all HipCamp users regardless.' }
      ]
    },
    amenities: [
      { icon: '🅿️', label: 'Park at listing' },
      { icon: '♿', label: 'No wheelchair access' },
      { icon: '🚿', label: 'Wifi 1 Gb/s/ch' },
      { icon: '🚻', label: 'Pets accessible' }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to search
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Title Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{campingData.name}</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="font-medium">{campingData.rating}</span>
              <span className="ml-1">({campingData.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{campingData.location}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 mb-8 h-96">
          <div className="col-span-2 row-span-2">
            <img
              src={campingData.images[0]}
              alt="Main campground view"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-2">
            {campingData.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Campground view ${index + 2}`}
                className="w-full h-full object-cover rounded-r-lg"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Host Info */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Hosted by {campingData.hostName}</h3>
                  <p className="text-gray-600 text-sm">{campingData.hostExperience}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{campingData.description}</p>
              <Button variant="link" className="p-0 h-auto text-sm">Show more →</Button>
            </div>

            <Separator />

            {/* Vehicle Details */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vehicle details</h3>
              <div className="space-y-3">
                {campingData.vehicleDetails.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 border border-gray-300 rounded flex-shrink-0 flex items-center justify-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>
              <Button variant="link" className="p-0 h-auto text-sm mt-3">Show more</Button>
            </div>

            <Separator />

            {/* What to Expect */}
            <div>
              <h3 className="text-xl font-semibold mb-4">What to expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {campingData.whatToExpect.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{item.label}</p>
                      {item.description && (
                        <p className="text-sm text-gray-600">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="link" className="p-0 h-auto text-sm mt-3">Show more</Button>
            </div>

            <Separator />

            {/* Things to Know */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Things to know</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Getting there</h4>
                  <div className="space-y-2">
                    {campingData.thingsToKnow.gettingThere.map((item, index) => (
                      <p key={index} className="text-sm text-gray-700">{item.label}</p>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">During your trip</h4>
                  <div className="space-y-3">
                    {campingData.thingsToKnow.duringTrip.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{item.label}</p>
                          {item.description && (
                            <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {campingData.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-lg">{amenity.icon}</span>
                    <span className="text-sm text-gray-700">{amenity.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Reviews Section */}
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" />
                  <span className="text-xl font-semibold">{campingData.rating}</span>
                </div>
                <span className="text-gray-600">· {campingData.reviewCount} reviews</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sample reviews */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">C</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Conor V.</p>
                        <p className="text-xs text-gray-600">March 2018</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">Great place to visit. Well set out and had nice Brisbane camping. But where we...</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">A</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Anna R.</p>
                        <p className="text-xs text-gray-600">March 2018</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">I'm John - Monday 3 hours. We wanted to see if they. Bit out of 5. We will come...</p>
                  </CardContent>
                </Card>
              </div>
              
              <Button variant="outline" className="mt-4">Show all 32 reviews</Button>
            </div>

            <Separator />

            {/* Location */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map would be displayed here</p>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                To respect the Host's privacy, the precise address of this land will be provided after booking.
              </p>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold">AU${campingData.price}</span>
                    <span className="text-gray-600 ml-1">/ night</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{campingData.rating}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="border border-gray-300 rounded-md p-3">
                      <label className="text-xs text-gray-600">CHECK-IN</label>
                      <p className="text-sm font-medium">Add date</p>
                    </div>
                    <div className="border border-gray-300 rounded-md p-3">
                      <label className="text-xs text-gray-600">CHECKOUT</label>
                      <p className="text-sm font-medium">Add date</p>
                    </div>
                  </div>
                  
                  <div className="border border-gray-300 rounded-md p-3">
                    <label className="text-xs text-gray-600">GUESTS</label>
                    <p className="text-sm font-medium">2 guests</p>
                  </div>
                </div>

                <Button className="w-full bg-orange-600 hover:bg-orange-700 mb-4">
                  3 sites available
                </Button>

                <Button variant="outline" className="w-full mb-4">
                  You won't be charged yet
                </Button>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>AU$56 x 4 nights</span>
                    <span>AU$224</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Service fee</span>
                    <span>AU$31</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reserve site ($27</span>
                    <span>AU$27</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>AU$25</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>AU$307.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampingDetails;
