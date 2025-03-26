export default function Footer() {
  return (
    <footer className="border-t bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Fox Brook Wine</h3>
            <p className="text-sm text-muted-foreground">
              Premium wine selection in Lagos, Nigeria. We supply the best wines to retail stores, hotels, weddings, and corporate events.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Our Wines</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/wines/moscato" className="text-muted-foreground hover:text-red-600">
                  Moscato
                </a>
              </li>
              <li>
                <a href="/wines/merlot" className="text-muted-foreground hover:text-red-600">
                  Merlot
                </a>
              </li>
              <li>
                <a href="/wines/cabernet" className="text-muted-foreground hover:text-red-600">
                  Cabernet Sauvignon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:08101023889" className="text-muted-foreground hover:text-red-600">
                  08101023889
                </a>
              </li>
              <li>
                <a href="tel:09079849145" className="text-muted-foreground hover:text-red-600">
                  09079849145
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/foxbrookwine/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-red-600">
                  @foxbrookwine
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Visit Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Shop A3 631/652 HFP Eastline Shopping Complex, Lekki Ajah Lagos
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/foxbrookwine/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-red-600"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Fox Brook Wine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}