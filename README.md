# Register Checkout App

Just a quick sample app.  Alotted time was 3 ~ 4 hours but I ended up on the 6~7 hour side of things working around some of my issues trying to wrap my head around AngularJS and doing the usual CSS dance all developers do at one point in time.  Beautification is hard.

The concept was that this would be something a clerk would use at a register or on a mobile pad.  With a limited catalog, you can simply deal with the items in nice, big icons that you can just mash away to register what your client is asking for.  Everything is calculated dynamically so no need do anything to get the subtotals and taxed total.

The catalog is fetched from a static json file so it should be easy to expand it to more items, but for now, the UI can really only handle so much before it triggers scrolling and the concept becomes really unfriendly.

Basic things are functional.  The Print and Email buttons on the receipt are not wired to anything.

Everything could look a lot prettier.

There's a step I've omitted here which would be to Pay.  I would envision once the client see the items and the receipt, then they could pay for it and the receipt can be sent to them via email or printed on the spot.

And of course the whole concept of saving your cart and customer information for reuse would be a must for a real app.  This one was more a framework test to see what visuals might be useful for a clerk and if the functionality was at least superficially there.

Let me know if anyone has any questions!

The running app is available here: [https://registercheckout.firebaseapp.com](https://registercheckout.firebaseapp.com)