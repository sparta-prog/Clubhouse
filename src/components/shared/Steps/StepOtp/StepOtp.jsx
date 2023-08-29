import React, { useState } from 'react';
import Card from '../../Card/Card';
import TextInput from '../../TextInput/TextInput';
import Button from '../../Button/Button';
import styles from './StepOtp.module.css';

const StepOtp = () => {
    const [otp, setOtp] = useState('');
    
    return (
        <>
            <div className={styles.cardWrapper}>
                <Card
                    title="Enter the code we just texted you"
                    icon="lock-emoji"
                >
                    <TextInput
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <div className={styles.actionButtonWrap}>
                        <Button text="Next" />
                    </div>
                    <p className={styles.bottomParagraph}>
                        By entering your number, you’re agreeing to our Terms of
                        Service and Privacy Policy. Thanks!
                    </p>
                </Card>
            </div>
        </>
    );
};

export default StepOtp;