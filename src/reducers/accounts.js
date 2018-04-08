import {
  DEFAULT_BASE_CURRENCY,
  DEFAULT_TO_CURRENCY,
  SELECT_BASE_CURRENCY,
  SELECT_TO_CURRENCY,
} from '../constants/Currencies';
import {
  DEFAULT_GBP_BALANCE,
  DEFAULT_USD_BALANCE,
  DEFAULT_EUR_BALANCE,
  EXCHANGE,
} from '../constants/Accounts';

const initialAccounts = [
  {
    currency: 'GBP',
    balance: DEFAULT_GBP_BALANCE,
  },
  {
    currency: 'USD',
    balance: DEFAULT_USD_BALANCE,
  },
  {
    currency: 'EUR',
    balance: DEFAULT_EUR_BALANCE,
  },
];

const fromAccount = initialAccounts.find(item => item.currency === DEFAULT_BASE_CURRENCY);
const toAccount = initialAccounts.find(item => item.currency === DEFAULT_TO_CURRENCY);

const initialState = {
  accounts: initialAccounts,
  toAccount,
  fromAccount,
};

const accounts = (state = initialState, action) => {
  switch (action.type) {
    // eslint-disable-next-line no-case-declarations
    case EXCHANGE:
      const {
        from,
        to,
        amountFrom,
        amountTo,
      } = action;

      const stateCopied = Object.assign({}, state);

      stateCopied.accounts = stateCopied.accounts.map((account) => {
        if (account.currency === from) {
          // eslint-disable-next-line no-param-reassign
          account.balance = (account.balance - amountFrom).toFixed(2) * 1;
        }

        if (account.currency === to) {
          // eslint-disable-next-line no-param-reassign
          account.balance = (+account.balance + +amountTo).toFixed(2) * 1;
        }

        return account;
      });

      return stateCopied;
    // eslint-disable-next-line no-case-declarations
    case SELECT_BASE_CURRENCY:
      const { baseCurrency } = action;
      return {
        ...state,
        fromAccount: action.accounts.find(account => account.currency === baseCurrency),
      };
    // eslint-disable-next-line no-case-declarations
    case SELECT_TO_CURRENCY:
      const { toCurrency } = action;
      return {
        ...state,
        toAccount: action.accounts.find(account => account.currency === toCurrency),
      };
    default:
      return state;
  }
};

export default accounts;
