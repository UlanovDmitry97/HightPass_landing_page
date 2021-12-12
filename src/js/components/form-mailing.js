new JustValidate('.about-us__form', {
  rules: {
    email: {
      required: true,
      email: true
    },
  },
  messages: {
    email: 'Недопустимый формат',
  },
  colorWrong: '#F06666'
});
