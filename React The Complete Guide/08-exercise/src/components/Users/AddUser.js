import styles from './AddUser.module.css';
import Button from "../UI/Button";
import Card from "../UI/Card";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const usernameRef = useRef();
  const ageRef = useRef();
  //const [username, setUsername] = useState('');
  //const [age, setAge] = useState('');
  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const age = ageRef.current.value;

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    const user = {
      id: Math.random(),
      username: username,
      age: +age,
    };

    props.onAddUser(user);
    usernameRef.current.value = '';
    ageRef.current.value = '';
    //setUsername('');
    //setAge('');
  }

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={usernameRef}
            //value={username}
            //onChange={el => setUsername(el.target.value)}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageRef}
            //value={age}
            //onChange={el => setAge(el.target.value)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
