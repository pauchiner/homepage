import {FormButton} from 'components/buttons';
import useForm from './hooks/useForm';
import Input from 'components/input';
import Alert from 'components/alert';
import './styles.css';

interface Props {
  url: string;
}

const ContactForm = (props: Props) => {
  const {inputs, status, handleSubmit, handleOnChange} = useForm(props.url);

  return (
    <>
      <form class="contact-form" onSubmit={handleSubmit}>
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
          autocomplete="email"
          value={inputs.email}
          onChange={handleOnChange}
          placeholder="name@email.com"
        />
        <FormButton
          submitted={status.submitted}
          submitting={status.submitting}
          id="contact-button">
          Send
        </FormButton>
      </form>
      <Alert id="contact-form-alert" visible={status.info.message} type="error">
        {status.info.message}
      </Alert>
    </>
  );
};

export default ContactForm;
