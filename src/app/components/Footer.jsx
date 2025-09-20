import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black mt-20 flex flex-col lg:flex-row justify-between gap-y-10 lg:gap-x-5 px-6 sm:px-12 lg:px-32 pt-16 pb-10">
      {/* Column 1 */}
      <div>
        <h2 className="text-2xl font-bold text-white">Exclusive</h2>
        <h2 className="text-xl font-medium mt-6 text-white">Subscribe</h2>
        <p className="text-white mt-6">Get 10% off your first order</p>
        <div className="flex items-center mt-4 justify-between w-full border border-white py-3 text-[#FAFAFA] px-4">
          <input
            type="email"
            className="w-[85%] bg-transparent outline-none text-sm"
            placeholder="Enter your email"
          />
          <button type="button" className="cursor-pointer">
            <Image src="/icon-send.svg" alt="send" width={20} height={20} />
          </button>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <h2 className="text-xl font-medium text-white">Support</h2>
        <p className="text-white mt-4">
          111 Bijoy sarani, Dhaka,
          <br /> DH 1515, Bangladesh.
        </p>
        <p className="text-white mt-4">exclusive@gmail.com</p>
        <p className="text-white mt-4">+88015-88888-9999</p>
      </div>

      {/* Column 3 */}
      <div>
        <h2 className="text-xl font-medium text-white">Account</h2>
        <p className="text-white mt-4">My Account</p>
        <p className="text-white mt-4">Login/Register</p>
        <p className="text-white mt-4">Cart</p>
        <p className="text-white mt-4">Wishlist</p>
      </div>

      {/* Column 4 */}
      <div>
        <h2 className="text-xl font-medium text-white">Quick link</h2>
        <p className="text-white mt-4">Privacy Policy</p>
        <p className="text-white mt-4">Terms Of Use</p>
        <p className="text-white mt-4">FAQ</p>
        <p className="text-white mt-4">Contact</p>
      </div>

      {/* Column 5 */}
      <div>
        <h2 className="text-xl font-medium text-white">Download App</h2>
        <p className="text-white text-sm mt-6">
          Save $3 with App New User Only
        </p>
        <div className="flex items-center gap-x-2 mt-2">
          <div>
            <Image src="/Qr Code.svg" alt="QR Code" width={70} height={70} />
          </div>
          <div className="flex flex-col gap-y-2">
            <Image src="/playStore.svg" alt="Play Store" width={110} height={40} />
            <Image src="/AppStore.svg" alt="App Store" width={110} height={40} />
          </div>
        </div>
        <div className="flex items-center gap-x-6 mt-6">
          <Image src="/Icon-Facebook.svg" alt="Facebook" width={24} height={24} />
          <Image src="/Icon-Twitter.svg" alt="Twitter" width={24} height={24} />
          <Image src="/icon-instagram.svg" alt="Instagram" width={24} height={24} />
          <Image src="/icon-Twitter.svg" alt="Twitter2" width={24} height={24} />
        </div>
      </div>
    </div>
  );
}
