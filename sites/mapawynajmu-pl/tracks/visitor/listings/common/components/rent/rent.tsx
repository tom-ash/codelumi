import { Styles } from '../../../../../../types/styles';
import { parseCurrency } from '../../helpers/currency-parsers';

interface RentProps {
  rent: string;
  currency: number;
  styles: Styles;
}

export const Rent = (props: RentProps) => {
  const { rent, currency, styles } = props;

  const multipliedAmount = `${Math.ceil(+rent * 100)}`;
  const integerAmount = (
    <span className={styles.rentAmount}>{multipliedAmount.slice(0, -2)}</span>
  );
  const decimalAmount = multipliedAmount.slice(-2);
  const amountWithDecimal = (
    <>
      {integerAmount}
      <sup className={styles.decimal}>{decimalAmount}</sup>
    </>
  );
  const parsedAmount =
    decimalAmount === '00' ? integerAmount : amountWithDecimal;
  const parsedCurrency = parseCurrency(currency);

  return (
    <div className={styles.rent}>
      {parsedAmount}
      {parsedCurrency}
      <span className={styles.rentPerMonth}>/MC</span>
    </div>
  );
};
