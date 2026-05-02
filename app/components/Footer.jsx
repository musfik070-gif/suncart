export default function Footer() {
  return (
    <footer className="bg-base-200 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-6 md:grid-cols-3 text-center md:text-left">
        <div>
          <p className="font-semibold text-lg text-primary">SunCart © 2026</p>
          <p className="text-sm text-gray-600">Summer Essentials Store</p>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <p className="text-sm text-gray-600">support@suncart.com</p>
          <p className="text-sm text-gray-600">Dhaka, Bangladesh</p>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p className="font-semibold">Follow Us</p>
          <div className="flex justify-center md:justify-end gap-4 text-sm text-gray-600">
            <a href="#" aria-label="SunCart Facebook page">
              Facebook
            </a>
            <a href="#" aria-label="SunCart Instagram page">
              Instagram
            </a>
            <a href="#" aria-label="SunCart Twitter page">
              Twitter
            </a>
          </div>
          <a href="#" className="text-sm text-gray-600">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
