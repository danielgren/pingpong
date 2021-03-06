import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';
import globalStyles from 'globalStyles';
import uuid from 'services/utils/uuid';

const Wrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
});
const labelStyles = css({
  color: `hsla(${globalStyles.colors.white},1)`,
  fontSize: '16px',
  position: 'absolute',
  top: '-0.7em',
  left: '0.5em',
  padding: '0 0.3em',
  backgroundColor: `hsla(${globalStyles.colors.blue},1)`
});

const Input = ({ value, label, notice, status, getRef, margin, ...rest }) => {
  const statusColor = status
    ? `hsla(${globalStyles.colors[status]}, 1)`
    : `hsla(${globalStyles.colors.white}, 1)`;
  const noticeColor =
    statusColor === 'transparent'
      ? `hsla(${globalStyles.colors.white}, 1)`
      : statusColor;
  const inputStyles = css({
    borderStyle: 'solid',
    borderWidth: '1px',
    appearance: 'none !important',
    borderColor: statusColor,
    color: `hsla(${globalStyles.colors.white}, 1)`,
    fontSize: '24px',
    padding: globalStyles.inputPadding,
    borderRadius: globalStyles.borderRadius,
    backgroundColor: 'transparent',
    ':hover': {
      borderColor: `hsla(${globalStyles.colors.success}, .5)`
    },
    ':focus': {
      borderColor: `hsla(${globalStyles.colors.success}, .5)`
    },
    ':-webkit-autofill': {
      boxShadow: `inset 0 0 0px 9999px hsl(${globalStyles.colors.blue})`,
      WebkitTextFillColor: `hsl(${globalStyles.colors.white}) !important`
    }
  });

  const id = uuid();
  const marginStyling = margin ? { margin } : { margin: '0 0 1em 0' };

  return (
    <Wrapper style={marginStyling}>
      <label {...labelStyles} htmlFor={id}>
        {label} {notice && <span style={{ color: noticeColor }}>{notice}</span>}
      </label>
      <input
        className={inputStyles}
        value={value}
        {...rest}
        id={id}
        ref={ref => {
          getRef ? getRef(ref) : null;
        }}
      />
    </Wrapper>
  );
};

export default Input;
