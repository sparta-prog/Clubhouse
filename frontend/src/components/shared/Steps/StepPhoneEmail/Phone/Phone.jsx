import React, { useState } from 'react';
import Card from '../../../Card/Card';
import Button from '../../../Button/Button';
import TextInput from '../../../TextInput/TextInput';
import styles from '../StepPhoneEmail.module.css';
import {sendOtp} from '../../../../../http/index';

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    async function submit() {
        const { data } = await sendOtp({ phone: phoneNumber });
        console.log(data);
        
    }

    return (
        <Card title="Enter you phone number" icon="phone">
            <TextInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <div>
                <div className={styles.actionButtonWrap}>
                    <Button text="Next" onClick={submit}/>
                </div>
                <p className={styles.bottomParagraph}>
                    By entering your number, you’re agreeing to our Terms of
                    Service and Privacy Policy. Thanks!
                </p>
            </div>
        </Card>
    );
};

export default Phone;