import React from 'react';
import { parseCurrency } from '../../../../../common/helpers/currency-parsers';

// @ts-ignore
function PresentRent({ amount, currency, type, perSqm, net }) {
  if (!amount) return null;

  const multipliedAmount = `${Math.ceil(amount * 100)}`;

  return (
    <div className={`rent-container ${type}`}>
      {multipliedAmount.slice(0, -2)}{' '}
      <sup className="decimal">{multipliedAmount.slice(-2)}</sup> {currency}
      {perSqm && (
        <>
          {/* TODO: LANG! */} /m<sup>2</sup>
        </>
      )}
      {/* TODO: LANG */}
      <sub>${net ? 'NETTO' : ''} /MC</sub>
      <div className="float-clear" />
    </div>
  );
}

class AnnouncementCreatePrimary extends React.Component {
  // @ts-ignore
  constructor(props) {
    super(props);
  }

  render() {
    const {
      // @ts-ignore
      area,
      // @ts-ignore
      netRentAmount,
      // @ts-ignore
      netRentAmountPerSqm,
      // @ts-ignore
      grossRentAmount,
      // @ts-ignore
      grossRentAmountPerSqm,
      // @ts-ignore
      rentCurrency,
      // @ts-ignore
    } = this.props;

    if (!area && !grossRentAmount && !netRentAmount) {
      return null;
    }

    const currency = parseCurrency(rentCurrency);

    return (
      <div className="primary-data">
        <div className="column">
          {area && (
            <div className="area">
              {area}&nbsp;
              {/* TODO: LANG! */}m<sup>2</sup>
              <div className="float-clear" />
            </div>
          )}
        </div>
        {grossRentAmount && grossRentAmountPerSqm && (
          <div className="column">
            {/* @ts-ignore */}
            <PresentRent
              amount={grossRentAmount}
              currency={currency}
              type="gross total"
              perSqm={false}
            />
            {/* @ts-ignore */}
            <PresentRent
              amount={grossRentAmountPerSqm}
              currency={currency}
              type="gross per-sqm"
              perSqm={true}
            />
          </div>
        )}
        {netRentAmount && netRentAmountPerSqm && (
          <div className="column">
            <PresentRent
              amount={netRentAmount}
              currency={currency}
              type="net total"
              perSqm={false}
              net={true}
            />
            <PresentRent
              amount={netRentAmountPerSqm}
              currency={currency}
              type="net per-sqm"
              perSqm={true}
              net={true}
            />
          </div>
        )}
        <div className="float-clear" />
      </div>
    );
  }
}

export default AnnouncementCreatePrimary;
