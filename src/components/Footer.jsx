import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#C9C1DD] px-4 lg:px-20 py-6 flex lg:flex-row flex-col justify-between mt-14">
      <div>
        <img src="../src/assets/logo.svg" alt="logo" />
        <p className="hidden lg:block">
          At Timbu, we bring together the finest skincare products from trusted
          brands to offer you personalized regimens that celebrate your unique
          skin. Our commitment is to help you achieve radiant, healthy skin
          through high-quality products, and a deep understanding of your
          skincare needs.
        </p>
      </div>
      <div className="lg:flex gap-4">
        <div className="hidden lg:block">
          <h4>Information</h4>
          <ul>
            <li>About Us</li>
            <li>Shipping & Delivery</li>
            <li>Returns & Refunds</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="hidden  lg:block">
          <h4>My Account</h4>
          <ul>
            <li>My Cart</li>
            <li>My Wishlist</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2">Contact Us</h4>
          <ul className="flex flex-col gap-2">
            <li>+234 123456789</li>
            <li>+234 912367945</li>
            <li>hello@Timbu.com</li>
            <li>No 18a, Berry-way, Ikeja, Lagos.</li>
          </ul>
        </div>
      </div>

      <div className="hidden  lg:block">
        <h4>Join Our Newsletter</h4>
        <p>
          Sign up to our newsletter to enjoy discount deals, product updates and
          more.
        </p>
        <form className="flex gap-1 mt-4">
          <input type="email" placeholder="Your email address" />
          <button className="btn-blue">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}
