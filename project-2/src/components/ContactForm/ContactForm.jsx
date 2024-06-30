import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import {MdMessage} from 'react-icons/md'
import {useState} from "react";
const ContactForm = () => {
    const [name,setName] = useState("Bristy");
    const [email,setEmail] = useState("bristy@gmail.com");
    const [text,setText] = useState("Yeah this is for her");
    
    const onSubmit = (event) => {
        
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
       

    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
            <Button
            text="VIA CALL" 
            icon={<IoMdCall fontSize="24px"/>}
            />
            </div>
            <Button
            isOutline= {true}
            text="VIA E-MAIL FROM" icon={<IoIosMail fontSize="25px"/>}/>

            <form onSubmit={onSubmit}>
               <div className={styles.form_control}>
               <label htmlFor="name">Name</label>
               <input type="text" name="name"/>
               </div>

               <div className={styles.form_control}>
               <label htmlFor="email">E-mail</label>
               <input type="email" name="name"/>
               </div>

               <div className={styles.form_control}>
               <label htmlFor="text">Text</label>
               <textarea name="text" rows="8"/>
               </div>

               <div style={{
                display:"flex",
                justifyContent: "end",
               }}>
               <Button text="SUBMIT BUTTON"/>
               </div>
               <div>{name + " " + email + " " + text}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="/images/contact.svg" alt="contact image" />
        </div>
      
    </section>
  )
}

export default ContactForm
