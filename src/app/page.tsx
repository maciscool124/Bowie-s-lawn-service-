"use client";

import { useState } from "react";

interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

interface Booking {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  serviceArea: string;
  serviceType: string;
  instructions: string;
  bookingDate: string;
}

export default function Home() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "Outstanding service! My lawn looks better than ever. Highly recommended!",
      date: "2024-08-10",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      text: "Professional, reliable, and affordable. Best lawn service in town!",
      date: "2024-08-05",
    },
    {
      id: 3,
      name: "Mike Davis",
      rating: 4,
      text: "Bowie's team is incredible. They transformed my backyard completely.",
      date: "2024-07-28",
    },
  ]);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 5,
    text: "",
  });

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceArea: "Minneapolis",
    serviceType: "Lawn Mowing",
    instructions: "",
  });

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleReviewFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setReviewForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (reviewForm.name && reviewForm.text) {
      const newReview: Review = {
        id: Math.max(...reviews.map((r) => r.id), 0) + 1,
        name: reviewForm.name,
        rating: reviewForm.rating,
        text: reviewForm.text,
        date: new Date().toISOString().split("T")[0],
      };
      setReviews([newReview, ...reviews]);
      setReviewForm({ name: "", rating: 5, text: "" });
      alert("Thank you for your review!");
    }
  };

  const handleBookingFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingForm.name && bookingForm.email && bookingForm.phone && bookingForm.date && bookingForm.time) {
      const newBooking: Booking = {
        id: Math.max(...bookings.map((b) => b.id), 0) + 1,
        name: bookingForm.name,
        email: bookingForm.email,
        phone: bookingForm.phone,
        date: bookingForm.date,
        time: bookingForm.time,
        serviceArea: bookingForm.serviceArea,
        serviceType: bookingForm.serviceType,
        instructions: bookingForm.instructions,
        bookingDate: new Date().toISOString().split("T")[0],
      };
      setBookings([newBooking, ...bookings]);
      setBookingForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        serviceArea: "Minneapolis",
        serviceType: "Lawn Mowing",
        instructions: "",
      });
      setBookingSuccess(true);
      setTimeout(() => setBookingSuccess(false), 5000);
    }
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - you can add email service integration here
    console.log("Form submitted:", contactForm);
    alert("Thank you for your message! We'll contact you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              <h1 className="text-2xl font-bold text-gray-900">
                Bowie's Lawn Service
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600">
                Services
              </a>
              <a href="#gallery" className="text-gray-700 hover:text-green-600">
                Gallery
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-green-600"
              >
                Testimonials
              </a>
              <a href="#reviews" className="text-gray-700 hover:text-green-600">
                Reviews
              </a>
              <a href="#booking" className="text-gray-700 hover:text-green-600">
                Book Now
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Your Lawn, Our Passion
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Professional lawn mowing and landscaping services for residential
                and commercial properties. Transform your outdoor space into a
                beautiful oasis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+16513509341"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition text-center"
                >
                  📞 Call Me
                </a>
                <a
                  href="mailto:macjbowie@gmail.com"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  ✉️ Email Me
                </a>
              </div>
            </div>
            <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 text-lg">Hero Image Placeholder</p>
                <p className="text-gray-500 text-sm mt-2">
                  Add your lawn service image here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Lawn Mowing",
                description:
                  "Regular lawn cutting with professional-grade equipment",
              },
              {
                title: "Landscaping",
                description:
                  "Design and installation of beautiful outdoor spaces",
              },
              {
                title: "Maintenance",
                description:
                  "Year-round lawn care and maintenance services",
              },
              {
                title: "Trimming & Edging",
                description:
                  "Precision trimming for a polished, professional look",
              },
              {
                title: "Mulching",
                description:
                  "Mulch installation and maintenance for healthy plants",
              },
              {
                title: "Seasonal Cleanup",
                description:
                  "Spring and fall cleanup for your outdoor areas",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-green-600 rounded-full mb-4"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-gray-300 h-64 rounded-lg flex items-center justify-center hover:shadow-lg transition"
              >
                <div className="text-center">
                  <p className="text-gray-600">Gallery Image {item}</p>
                  <p className="text-gray-500 text-sm">Add your lawn photos</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                text: "Outstanding service! My lawn looks better than ever. Highly recommended!",
              },
              {
                name: "Sarah Johnson",
                text: "Professional, reliable, and affordable. Best lawn service in town!",
              },
              {
                name: "Mike Davis",
                text: "Bowie's team is incredible. They transformed my backyard completely.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-green-600"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ⭐
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Reviews Display */}
            <div className="md:col-span-2">
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xl ${
                              i < review.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Form */}
            <div className="md:col-span-1">
              <div className="bg-white p-8 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Leave a Review
                </h3>
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleReviewFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Rating
                    </label>
                    <select
                      name="rating"
                      value={reviewForm.rating}
                      onChange={handleReviewFormChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                      <option value={3}>⭐⭐⭐ (3 stars)</option>
                      <option value={2}>⭐⭐ (2 stars)</option>
                      <option value={1}>⭐ (1 star)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Your Review
                    </label>
                    <textarea
                      name="text"
                      value={reviewForm.text}
                      onChange={handleReviewFormChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Share your experience with us..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Book Your Service
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="md:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg shadow">
                {bookingSuccess && (
                  <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    ✅ Booking request submitted! We'll contact you soon to confirm.
                  </div>
                )}
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={bookingForm.name}
                        onChange={handleBookingFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleBookingFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Phone Row */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={bookingForm.phone}
                      onChange={handleBookingFormChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="(651) 350-9341"
                    />
                  </div>

                  {/* Date and Time Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={bookingForm.date}
                        onChange={handleBookingFormChange}
                        required
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Time Slot *
                      </label>
                      <select
                        name="time"
                        value={bookingForm.time}
                        onChange={handleBookingFormChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      >
                        <option value="">Select a time</option>
                        <option value="07:00-09:00">7:00 AM - 9:00 AM</option>
                        <option value="09:00-12:00">9:00 AM - 12:00 PM</option>
                        <option value="12:00-15:00">12:00 PM - 3:00 PM</option>
                        <option value="15:00-18:00">3:00 PM - 6:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Service Area and Type Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Area
                      </label>
                      <select
                        name="serviceArea"
                        value={bookingForm.serviceArea}
                        onChange={handleBookingFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      >
                        <option value="Minneapolis">Minneapolis</option>
                        <option value="St. Paul">St. Paul</option>
                        <option value="Bloomington">Bloomington</option>
                        <option value="Edina">Edina</option>
                        <option value="Eagan">Eagan</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Service Type
                      </label>
                      <select
                        name="serviceType"
                        value={bookingForm.serviceType}
                        onChange={handleBookingFormChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      >
                        <option value="Lawn Mowing">Lawn Mowing</option>
                        <option value="Landscaping">Landscaping</option>
                        <option value="Maintenance">Maintenance</option>
                        <option value="Trimming & Edging">Trimming & Edging</option>
                        <option value="Mulching">Mulching</option>
                        <option value="Seasonal Cleanup">Seasonal Cleanup</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Instructions */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Special Instructions (Optional)
                    </label>
                    <textarea
                      name="instructions"
                      value={bookingForm.instructions}
                      onChange={handleBookingFormChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                      placeholder="Any special notes or requests for your service..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition text-lg"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>

            {/* Booking Info Card */}
            <div className="md:col-span-1">
              <div className="bg-green-50 p-8 rounded-lg border-2 border-green-600 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  📅 Booking Info
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Available Hours
                    </h4>
                    <p className="text-gray-700">
                      Monday - Saturday: 7 AM - 6 PM
                    </p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Service Areas
                    </h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>✓ Minneapolis</li>
                      <li>✓ St. Paul</li>
                      <li>✓ Bloomington</li>
                      <li>✓ Edina</li>
                      <li>✓ Eagan</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Quick Contact
                    </h4>
                    <a
                      href="tel:+16513509341"
                      className="text-green-600 font-semibold hover:text-green-700 block mb-2"
                    >
                      📞 (651) 350-9341
                    </a>
                    <a
                      href="mailto:macjbowie@gmail.com"
                      className="text-green-600 font-semibold hover:text-green-700 break-all"
                    >
                      ✉️ macjbowie@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings Display (if any) */}
          {bookings.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Recent Bookings
              </h3>
              <div className="grid gap-6">
                {bookings.slice(0, 5).map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-600"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">
                          {booking.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Booked on {booking.bookingDate}
                        </p>
                      </div>
                      <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {booking.serviceType}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Date & Time</p>
                        <p className="font-semibold text-gray-900">
                          {booking.date} {booking.time}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Location</p>
                        <p className="font-semibold text-gray-900">
                          {booking.serviceArea}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Contact</p>
                        <p className="font-semibold text-gray-900">
                          {booking.phone}
                        </p>
                      </div>
                    </div>
                    {booking.instructions && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                          <span className="font-semibold">Notes:</span>{" "}
                          {booking.instructions}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Contact Options */}
            <div className="bg-white bg-opacity-10 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-8">Quick Contact</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-white text-opacity-80 mb-2">Call Us</p>
                  <a
                    href="tel:+16513509341"
                    className="text-2xl font-bold hover:text-opacity-80 transition"
                  >
                    📞 (651) 350-9341
                  </a>
                </div>
                <div>
                  <p className="text-white text-opacity-80 mb-2">Email Us</p>
                  <a
                    href="mailto:macjbowie@gmail.com"
                    className="text-2xl font-bold hover:text-opacity-80 transition break-all"
                  >
                    ✉️ macjbowie@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-white text-opacity-80 mb-2">Hours</p>
                  <p className="text-lg">Monday - Saturday: 7am - 6pm</p>
                  <p className="text-lg">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 space-y-4"
            >
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleFormChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Tell us about your lawn care needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Bowie's Lawn Service. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Professional lawn care for your home and business
          </p>
        </div>
      </footer>
    </div>
  );
}
