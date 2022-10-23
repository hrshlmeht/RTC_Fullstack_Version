import React , {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'


const Phone = () => {
    const [phoneNumber , setPhoneNumber]= useState('')
  return (
    
    <Card title="Enter your phone number" icon="phone">
        <TextInput value = {phoneNumber} 
        onChange={(e)=> setPhoneNumber(e.target.value)}  />
                <div className={styles.actionButtonWrap}>
                    <Button text="Click Next" />
                </div>

                <p className={styles.bottomParagraph}>
                By entering the email you accept the terms and conditions
                </p>
            </Card>
  )
}

export default Phone