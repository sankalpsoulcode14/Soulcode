import React from 'react';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';

export default function SoulCodePrototype() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center">🔮 SoulCode by Sankalp</h1>
      <p className="text-center max-w-xl mb-6 text-gray-700">
        Decode your karma. Unlock your warrior spirit. Let your birth chart guide you back to power.
      </p>

      <Card className="w-full max-w-xl shadow-xl border-2 border-yellow-300">
        <CardContent className="space-y-4 p-6">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Input id="dob" type="date" />
            </div>
            <div>
              <Label htmlFor="time">Time of Birth</Label>
              <Input id="time" type="time" />
            </div>
            <div>
              <Label htmlFor="place">Place of Birth</Label>
              <Input id="place" placeholder="City, Country" />
            </div>
          </div>
          <div>
            <Label htmlFor="struggle">What’s bothering you right now?</Label>
            <Textarea id="struggle" placeholder="E.g. Career stuck, identity crisis, spiritual confusion..." />
          </div>
          <div>
            <Label htmlFor="soulq">One soul question you always carry</Label>
            <Input id="soulq" placeholder="(optional)" />
          </div>
          <Button className="w-full bg-yellow-500 hover:bg-yellow-600">🔍 Decode My Chart</Button>
        </CardContent>
      </Card>

      <p className="text-sm text-center mt-6 text-gray-500">Made with karma, not code.</p>
    </div>
  );
}