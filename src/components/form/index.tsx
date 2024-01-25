import {SendIcon} from 'components/icons';
import {Button} from 'components/buttons';
import styles from './styles.module.css';
import useForm from './hooks/useForm';
import Input from 'components/input';
import Alert from 'components/alert';

interface Props {
  url: string;
}

const ContactForm = (props: Props) => {
  const {inputs, status, handleSubmit, handleOnChange} = useForm(props.url);

  return (
    <>
      <form class={styles.form} onSubmit={handleSubmit}>
        <Input
          required
          id="name"
          value={inputs.name}
          autocomplete="name"
          placeholder="Your Name"
          onChange={handleOnChange}
        />
        <Input
          required
          type="email"
          id="email"
          maxLength={60}
          autocomplete="email"
          value={inputs.email}
          onChange={handleOnChange}
          placeholder="name@email.com"
        />
        <Button icon={<SendIcon />} id="contact-button">
          Send
        </Button>
      </form>
      <Alert
        id="contact-form-alert"
        visible={status.info.message !== ''}
        type={status.info.error ? 'error' : 'success'}>
        {status.info.message}
      </Alert>
    </>
  );
};

export default ContactForm;
