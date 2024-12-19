interface AreaProps {
  area: string;
  className: string;
}

export const Area = (props: AreaProps) => {
  const { area, className } = props;

  // TODO: Handle decimal sign (, vs .)

  const multipliedAmount = `${Math.ceil(+area * 100)}`;
  const integerAmount = multipliedAmount.slice(0, -2);
  const decimalAmount = multipliedAmount.slice(-2);
  const amount =
    decimalAmount === '00'
      ? integerAmount
      : `${integerAmount},${decimalAmount}`;

  return (
    <div className={className}>
      {amount} m<sup>2</sup>
    </div>
  );
};
