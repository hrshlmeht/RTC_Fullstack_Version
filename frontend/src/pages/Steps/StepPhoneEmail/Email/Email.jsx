import React , {useState} from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import styles from '../StepPhoneEmail.module.css'
const Email = () => {
    const [email , setemail]= useState('')
  return (
    <Card title="Enter your Email Address" icon="email-emoji">
        <TextInput value = {email} 
        onChange={(e)=> setemail(e.target.value)}  />
                <div className={styles.actionButtonWrap}>
                    <Button text="Click Next" />
                </div>

                <p className={styles.bottomParagraph}>
                By entering the email you accept the terms and conditions
                </p>
            </Card>
  )
}

export default Email