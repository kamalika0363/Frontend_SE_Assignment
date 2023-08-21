function Footer() {
  return (
    <footer className="text-xs md:text-[16px] font-medium text-gray-700">
      <div className="top">
        <div className="lists grid grid-cols-3 md:grid-cols-6 md:m-8 justify-items-center gap-4">
          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">
              Product
            </div>
            <a href="#">Overview</a>
            <a href="#">Features</a>
            <div className="special-text">
              <a href="#">Solutions</a>{" "}
              <span className="bg-green-100 rounded-xl px-1">New</span>
            </div>
            <a href="#">Tutorials</a>
            <a href="#">Pricing</a>
            <a href="#">Releases</a>
          </div>

          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">
              Company
            </div>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">News</a>
            <a href="#">Media kit</a>
            <a href="#">Contact</a>
          </div>

          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">
              Resouces
            </div>
            <a href="#">Blog</a>
            <a href="#">Newsletter</a>
            <a href="#">Events</a>
            <a href="#">Help Center</a>
            <a href="#">Tutorials</a>
            <a href="#">Support</a>
          </div>

          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">
              Use Cases
            </div>
            <a href="#">Startups</a>
            <a href="#">Enterprise</a>
            <a href="#">Government</a>
            <a href="#">SaaS</a>
            <a href="#">Marketplaces</a>
            <a href="#">Ecommerce</a>
          </div>

          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">Social</div>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">AngelList</a>
            <a href="#">Dribble</a>
          </div>

          <div className="links flex flex-col gap-1 md:gap-3">
            <div className="title font-semibold text-gray-400 mb-4">Legal</div>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Cookies</a>
            <a href="#">Licenses</a>
            <a href="#">Settings</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <hr className="w-[90%] m-auto" />
      <div className="bottom mt-6 mb-6 md:mb-8 flex gap-2 justify-between mx-2 md:mx-8 items-center">
        <div className="footer-logo text-black md:text-md md:font-semibold flex gap-1 items-center">
          <img width={25} src="/FooterSection/logomark.svg" alt="" />
          <h2>Untitled UI</h2>
        </div>
        <div className="footer-text text-gray-500">
          © 2077 Untitled UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
