import {React, useState} from 'react'
import StepOtp from '../../components/shared/Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../../components/shared/Steps/StepPhoneEmail/StepPhoneEmail';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
};

const Login = () => {
    const [step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

    return <Step onNext={onNext} />;
};

export default Login