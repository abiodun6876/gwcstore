export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About GCW Store</h3>
            <p className="text-sm text-muted-foreground">
              Your premier destination for delicious pastries, stylish fashion, and authentic African foods. 
              We serve retail customers, events, and corporate clients with quality products.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/pastries" className="text-muted-foreground hover:text-red-600">
                  Pastries
                </a>
              </li>
              <li>
                <a href="/fashion" className="text-muted-foreground hover:text-red-600">
                  Fashion
                </a>
              </li>
              <li>
                <a href="/african-foods" className="text-muted-foreground hover:text-red-600">
                  African Foods
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:9059227715" className="text-muted-foreground hover:text-red-600">
                  (905) 922-7715
                </a>
              </li>
              <li>
                <a href="mailto:gbemisolaseli@gmail.com" className="text-muted-foreground hover:text-red-600">
                  gbemisolaseli@gmail.com
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-600">
                  @gcwstore
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Visit Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Hamilton, Ontario, Canada
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600"
              >
                Instagram
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GCW Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}