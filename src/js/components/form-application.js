new JustValidate('.application', {
  rules: {
    email: {
      required: true,
      email: true
    },
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    message: {
      required: true,
      minLength: 2,
    },
  },
  messages: {
    email: 'Недопустимый формат',
    name: 'Недопустимый формат',
    message: 'Введите коментарий',
  },
  colorWrong: '#FF3030'
});
