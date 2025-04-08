import React from 'react';

const StepWizard = ({ steps, currentStep, onStepChange }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium
                  ${currentStep === index 
                    ? 'bg-[#ed6f5d]' 
                    : index < currentStep 
                      ? 'bg-[#03628a]' 
                      : 'bg-[#a1d5e2]'
                  }`}
              >
                {index + 1}
              </div>
              <span className={`mt-2 text-sm ${currentStep === index ? 'text-[#ed6f5d] font-medium' : 'text-gray-600'}`}>
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${index < currentStep ? 'bg-[#03628a]' : 'bg-[#a1d5e2]'}`}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepWizard;
