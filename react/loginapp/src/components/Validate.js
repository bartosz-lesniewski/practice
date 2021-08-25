// export const nicknameValidation = (fieldName, fieldValue) => {
//   if (fieldValue.trim() === '') {
//     return `${fieldName} is required`;
//   }
//   if (/[^a-zA-Z -]/.test(fieldValue)) {
//     return 'Invalid characters';
//   }
//   if (fieldValue.trim() < 1 || fieldValue.trim() > 19) {
//     return `${fieldName} needs to be at least three characters and max 20 characters`;
//   }
//   return null;
// };

// export const validate = {
//   nickname: (nick) => nicknameValidation('nickname', nick),
// };

// export const initialValues = {
//   nickname: '',
// };
