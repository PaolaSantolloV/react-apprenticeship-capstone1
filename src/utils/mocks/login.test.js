import '@testing-library/jest-dom';
import loginApi from './login.api';

const expected = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

test('should have access correctly', async () => {
  const result = await loginApi('wizeline', 'Rocks!');
  expect(expected).toMatchObject(result);
});

test('should havent access', async () => {
  await expect(loginApi('pao', 'Rocks!')).rejects.toThrow(
    'Username or password invalid'
  );
});
