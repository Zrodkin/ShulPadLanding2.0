export default function Demo() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See ShulPad in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how easy it is for donors to contribute with our intuitive interface
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1: Home view */}
          <div className="text-center fade-in-up">
            <img 
              src="/attached_assets/Mockup-homeview_1750274378260.png" 
              alt="ShulPad home screen - Tap to Donate"
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome Screen</h3>
            <p className="text-gray-600 text-sm">Simple tap to start donating</p>
          </div>
          
          {/* Step 2: Preset amounts */}
          <div className="text-center fade-in-up">
            <img 
              src="/attached_assets/Mockup-preset_1750274378260.png" 
              alt="ShulPad preset donation amounts"
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Amount</h3>
            <p className="text-gray-600 text-sm">Quick preset options or custom entry</p>
          </div>
          
          {/* Step 3: Custom entry */}
          <div className="text-center fade-in-up">
            <img 
              src="/attached_assets/Mockup-custom_1750274378261.png" 
              alt="ShulPad custom amount entry"
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Amount</h3>
            <p className="text-gray-600 text-sm">Easy number pad for any amount</p>
          </div>
          
          {/* Step 4: Receipt option */}
          <div className="text-center fade-in-up">
            <img 
              src="/attached_assets/Mockup-email_1750274378261.png" 
              alt="ShulPad receipt email option"
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tax Receipt</h3>
            <p className="text-gray-600 text-sm">Automatic email confirmation</p>
          </div>
        </div>
        
        {/* Payment processing visual */}
        <div className="mt-16 text-center fade-in-up">
          <div className="glassmorphism p-8 rounded-3xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Secure Payment Processing</h3>
            <div className="flex items-center justify-center space-x-8">
              <img 
                src="/attached_assets/Square Reader Tap Transparent_1750274378259.png" 
                alt="Square Reader for contactless payments"
                className="w-24 h-24 object-contain"
              />
              <div className="text-left">
                <div className="text-lg font-semibold text-gray-900 mb-2">Square Integration</div>
                <div className="text-gray-600 space-y-1">
                  <div>• Tap, chip, and swipe</div>
                  <div>• Apple Pay & Google Pay</div>
                  <div>• Bank-level security</div>
                  <div>• Instant processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}