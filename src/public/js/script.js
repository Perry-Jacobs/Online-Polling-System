// Alpine.js form validation for login
document.addEventListener('alpine:init', () => {
  Alpine.data('loginForm', () => ({
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    },

    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!this.email.trim()) {
        this.errors.email = 'Email is required';
        return false;
      }
      
      if (!emailRegex.test(this.email)) {
        this.errors.email = 'Please enter a valid email address';
        return false;
      }
      
      this.errors.email = '';
      return true;
    },

    validatePassword() {
      if (!this.password.trim()) {
        this.errors.password = 'Password is required';
        return false;
      }
      
      if (this.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters';
        return false;
      }
      
      this.errors.password = '';
      return true;
    },

    clearEmailError() {
      this.errors.email = '';
    },

    clearPasswordError() {
      this.errors.password = '';
    },

    validateForm() {
      const emailValid = this.validateEmail();
      const passwordValid = this.validatePassword();
      return emailValid && passwordValid;
    },

    handleSubmit(e) {
      if (!this.validateForm()) {
        e.preventDefault();
        return false;
      }
      return true;
    }
  }));

  Alpine.data('signupForm', () => ({
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      email: '',
      password: '',
      confirmPassword: ''
    },

    validateEmail() {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.errors.email = !this.email.trim()
        ? 'Email is required'
        : !emailRegex.test(this.email)
          ? 'Please enter a valid email address'
          : '';
      return !this.errors.email;
    },

    validatePassword() {
      this.errors.password = !this.password.trim()
        ? 'Password is required'
        : this.password.length < 8
          ? 'Password must be at least 8 characters'
          : '';
      return !this.errors.password;
    },

    validateConfirmPassword() {
      this.errors.confirmPassword = !this.confirmPassword.trim()
        ? 'Please confirm your password'
        : this.password !== this.confirmPassword
          ? 'Passwords do not match'
          : '';
      return !this.errors.confirmPassword;
    },

    clearError(field) {
      this.errors[field] = '';
    },

    validateForm() {
      return this.validateEmail() && this.validatePassword() && this.validateConfirmPassword();
    },

    handleSubmit(event) {
      if (!this.validateForm()) {
        event.preventDefault();
        return false;
      }
      return true;
    }
  }));

  Alpine.data('createPollForm', () => ({
    title: '',
    options: ['', ''],

    addOption() {
      if (this.options.length < 6) {
        this.options.push('');
      }
    },

    removeOption(index) {
      this.options.splice(index, 1);
    },

    handleSubmit(event) {
      if (!this.title.trim() || this.options.some((option) => !option.trim())) {
        event.preventDefault();
        document.querySelector('#poll-message').innerHTML = '<p class="rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">Add a question and complete every answer choice before publishing.</p>';
      }
    }
  }));
});
