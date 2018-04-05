import * as ACTIONS from '../constants/Accounts';

const initialState = {
  accounts: [
    {
      currency: 'GBP',
      balance: 100,
    },
    {
      currency: 'USD',
      balance: 100,
    },
    {
      currency: 'EUR',
      balance: 100,
    },
  ],
};


const accounts = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.EXCHANGE:
      const {
        from,
        to,
        amount,
      } = action;

      const {
        base,
        rates,
      } = state;

      const amountInBase = amount / rates[base];
      const toAmount = amountInBase * rates[to];
      const stateCopied = Object.assign({}, state);

      stateCopied.accounts = stateCopied.accounts.map((account) => {
        if (account.currency === from) {
          // eslint-disable-next-line
          account.balance -= amount;
        }

        if (account.currency === to) {
          // eslint-disable-next-line
          account.balance += toAmount;
        }

        return account;
      });


      return stateCopied;

    default:
      return state;
  }
};

export default accounts;
