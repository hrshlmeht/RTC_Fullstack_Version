import React from 'react';
import Button from '../../../../components/shared/Button/Button'



const StepOtp = ({ onNext }) => {

    return (
        <>
            <div className={styles.cardWrapper}>
            <Card title="Enter the OTP" icon="lock-emoji">
                
            <TextInput 
            value = {otp} 
                onChange={(e)=> setotp(e.target.value)}/>

                <div className={styles.actionButtonWrap}>
                    <Button text="Click Next" />
                </div>
                <p className={styles.bottomParagraph}>
                 By entering the OTP you accept the terms and conditions
                </p>
            </Card>
            </div>
        </>
    );
};

export default StepOtp;
