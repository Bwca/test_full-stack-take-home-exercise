import { FC } from 'react';

import { useForm } from 'react-hook-form';
import styles from './search-form.module.scss';
import { FormValues } from '../../models/form-values.model';

/* eslint-disable-next-line */
interface SearchFormProps {
  onSubmit: (data: FormValues) => unknown;
}

export const SearchForm: FC<SearchFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<FormValues>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={styles['container']}>
        <legend>Enter a phone number and message</legend>
        <label>Phone</label>
        <input
          placeholder="0123456789"
          type="number"
          {...register('phone', { required: true })}
        />
        <label>Message</label>
        <textarea
          placeholder="message"
          {...register('message')}
          
          cols={30}
          rows={10}
        ></textarea>
        <button type="submit">submit</button>
      </fieldset>
    </form>
  );
};
