import {useCallback, useState} from 'preact/hooks';

const useForm = (url: string) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: {error: false, message: ''}
  });
  const [inputs, setInputs] = useState({
    name: '',
    email: ''
  });

  const handleServerResponse = useCallback((ok: boolean, message: string) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, message}
      });
      setInputs({
        name: '',
        email: ''
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: {error: true, message}
      });
    }
  }, []);

  const handleOnChange = useCallback(
    (event: Event) => {
      const target = event.target as HTMLInputElement;

      setInputs(prev => ({
        ...prev,
        [target.id]: target.value
      }));
      setStatus({
        submitted: false,
        submitting: false,
        info: {error: false, message: ''}
      });
    },
    [inputs, status]
  );

  const handleSubmit = useCallback(
    (event: SubmitEvent) => {
      event.preventDefault();
      setStatus(prevStatus => ({...prevStatus, submitting: true}));

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(inputs),
        headers: {Accept: 'application/json'}
      }).then(response => {
        handleServerResponse(response.ok, response.statusText);
      });
    },
    [inputs, handleServerResponse]
  );

  return {inputs, status, handleSubmit, handleOnChange};
};

export default useForm;
