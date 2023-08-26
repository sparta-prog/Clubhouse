import React from 'react'
import { useState } from 'react';
import StepAvatar from '../../components/shared/Steps/StepAvatar/StepAvatar';
import StepName from '../../components/shared/Steps/StepName/StepName';
import StepOtp from '../../components/shared/Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../../components/shared/Steps/StepPhoneEmail/StepPhoneEmail';
import StepUsername from '../../components/shared/Steps/StepUsername/StepUsername';

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
};

function Register() {
    const[step, setStep] = useState(1);
    const Step = steps[step];

    function onNext() {
        setStep(step + 1);
    }

  return (
    <div>
        <Step onNext={onNext}/>
    </div>
  )
}

export default Register