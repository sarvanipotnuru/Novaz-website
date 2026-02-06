export default function Footer() {
  return (
    <footer className="bg-primary-light border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Novoz Infinity. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-gray-600">
          <span>Custom Software</span>
          <span>SaaS Development</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  );
}
