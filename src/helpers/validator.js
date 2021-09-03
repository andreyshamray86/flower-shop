export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)
export const minLength11 = minLength(11)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const number = value =>
value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const passwordsMatch = (value, allValues) => 
  value !== allValues.password ? 
    'Passwords do not match' :
     undefined
