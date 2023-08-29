import React, { useState } from 'react';
import StepPhoneEmail from '../../components/shared/Steps/StepPhoneEmail/StepPhoneEmail';
import StepOtp from '../../components/shared/Steps/StepOtp/StepOtp';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Authenticate = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return <Step onNext={onNext} />;
};

export default Authenticate;