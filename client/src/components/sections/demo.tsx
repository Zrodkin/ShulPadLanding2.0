export default function Demo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic background pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 premium-gradient rounded-full opacity-20 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 premium-gradient rounded-full opacity-20 blur-2xl animate-bounce delay-500"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 premium-gradient rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            See <span className="premium-text-gradient">ShulPad</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how easy it is for donors to contribute with our intuitive interface
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Home view */}
          <div className="text-center fade-in-up group">
            <div className="relative overflow-hidden rounded-2xl premium-glassmorphism p-4 mb-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img 
                src="/attached_assets/Mockup-homeview_1750274378260.png" 
                alt="ShulPad home screen - Tap to Donate"
                className="w-full max-w-xs mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">Welcome Screen</h3>
            <p className="text-gray-600 text-sm">Simple tap to start donating</p>
          </div>
          
          {/* Step 2: Preset amounts */}
          <div className="text-center fade-in-up group">
            <div className="relative overflow-hidden rounded-2xl premium-glassmorphism p-4 mb-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img 
                src="/attached_assets/Mockup-preset_1750274378260.png" 
                alt="ShulPad preset donation amounts"
                className="w-full max-w-xs mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">Choose Amount</h3>
            <p className="text-gray-600 text-sm">Quick preset options or custom entry</p>
          </div>
          
          {/* Step 3: Custom entry */}
          <div className="text-center fade-in-up group">
            <div className="relative overflow-hidden rounded-2xl premium-glassmorphism p-4 mb-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img 
                src="/attached_assets/Mockup-custom_1750274378261.png" 
                alt="ShulPad custom amount entry"
                className="w-full max-w-xs mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Custom Amount</h3>
            <p className="text-gray-600 text-sm">Easy number pad for any amount</p>
          </div>
          
          {/* Step 4: Receipt option */}
          <div className="text-center fade-in-up group">
            <div className="relative overflow-hidden rounded-2xl premium-glassmorphism p-4 mb-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <img 
                src="/attached_assets/Mockup-email_1750274378261.png" 
                alt="ShulPad receipt email option"
                className="w-full max-w-xs mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-700 transition-colors">Tax Receipt</h3>
            <p className="text-gray-600 text-sm">Automatic email confirmation</p>
          </div>
        </div>
        
        {/* Payment processing visual */}
        <div className="mt-16 text-center fade-in-up">
          <div className="interactive-card max-w-3xl mx-auto noise-texture">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
              <span className="premium-text-gradient">Secure Payment Processing</span>
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="relative">
                <div className="absolute inset-0 premium-gradient rounded-full opacity-20 blur-xl animate-pulse"></div>
                <img 
                  src="/attached_assets/Square Reader Tap Transparent_1750274378259.png" 
                  alt="Square Reader for contactless payments"
                  className="w-32 h-32 object-contain relative z-10"
                />
              </div>
              <div className="text-left space-y-4">
                <div className="text-xl font-semibold text-gray-900 mb-4">Square Integration</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="premium-glassmorphism p-3 rounded-xl">
                    <div className="font-medium text-purple-700">• Tap, chip, and swipe</div>
                  </div>
                  <div className="premium-glassmorphism p-3 rounded-xl">
                    <div className="font-medium text-blue-700">• Apple Pay & Google Pay</div>
                  </div>
                  <div className="premium-glassmorphism p-3 rounded-xl">
                    <div className="font-medium text-green-700">• Bank-level security</div>
                  </div>
                  <div className="premium-glassmorphism p-3 rounded-xl">
                    <div className="font-medium text-orange-700">• Instant processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}