import { AccountFormErrors, AccountFormValues } from './Form';

// https://emailregex.com/
const email99RegExp = new RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const errorMap = {
  name: {
    required: {
      normal: 'Please enter your name',
      tooltip:
        'We do require your name, or maybe the name of someone else that you are inputting as.',
    },
  },
  email: {
    required: {
      normal: 'Please enter your email address',
      tooltip: 'We do require an email address, probably yours, maybe someone up the chain?',
    },
    format: {
      normal: 'Please enter a correctly formatted email address',
      tooltip:
        'Your email address is formatted incorrectly and is not correct - please double check for misspelling.',
    },
  },
  townOfBirth: {
    required: {
      normal: 'Please enter your country of birth',
      tooltip:
        'We are trying to pry, we just think you might not know the answer to this question for a certain person.',
    },
  },
  numberDonuts: {
    negative: {
      normal: 'Please input a number of donuts',
      tooltip: `Negative donuts? D'oh!`,
    },
  },
  numberDice: {
    negative: {
      normal: 'Please input a number of dice',
      tooltip: `Less than no dice? Where's the luck in that?`,
    },
  },
};

export const validateAccountForm = (values: AccountFormValues) => {
  const errors: AccountFormErrors = {};

  const { name, email, townOfBirth, numberDice, numberDonuts } = values;
  if (!name) {
    errors.name = errorMap.name.required.normal;
    errors.nameTooltip = errorMap.name.required.tooltip;
  }
  if (!email) {
    errors.email = errorMap.email.required.normal;
    errors.emailTooltip = errorMap.email.required.tooltip;
  } else {
    const validEmail = email.match(email99RegExp);

    if (validEmail === null) {
      errors.email = errorMap.email.format.normal;
      errors.emailTooltip = errorMap.email.format.tooltip;
    }
  }
  if (!townOfBirth) {
    errors.townOfBirth = errorMap.townOfBirth.required.normal;
    errors.townOfBirthTooltip = errorMap.townOfBirth.required.tooltip;
  }
  if (numberDonuts < 0) {
    errors.numberDonuts = errorMap.numberDonuts.negative.normal;
    errors.numberDonutsTooltip = errorMap.numberDonuts.negative.tooltip;
  }
  if (numberDice < 0) {
    errors.numberDice = errorMap.numberDice.negative.normal;
    errors.numberDiceTooltip = errorMap.numberDice.negative.tooltip;
  }

  return errors;
};
