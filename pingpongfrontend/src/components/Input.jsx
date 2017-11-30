import React from 'react';
import glamorous from 'glamorous';
import globalStyles from 'globalStyles';

const Wrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  margin: '5px 0'
});
const StyledInput = glamorous.input({
  border: `1px solid rgb(${globalStyles.colors.black})`,
  color: `rgb(${globalStyles.colors.black})`,
  fontSize: '24px',
  padding: globalStyles.inputPadding,
  borderRadius: globalStyles.borderRadius,
  ':hover': {
    backgroundColor: `rgba(${globalStyles.colors.black}, .05)`
  },
  ':focus': {
    backgroundColor: `rgba(${globalStyles.colors.black}, .05)`
  }
});
const StyledLabel = glamorous.label({
  color: 'black',
  backgroundColor: 'white',
  fontSize: '18px',
});

const Input = ({
  value,
  label,
  notice,
  status,
  ...rest
}) => {

  const statusColor = status ? `rgb(${globalStyles.colors[status]})` : 'black';
  const noticeColor = statusColor === 'transparent' ? `rgb(${globalStyles.colors.white})` : statusColor;

  return (
    <Wrapper>
      <StyledLabel>{label} {notice && (<span style={{color: noticeColor}}>{notice}</span>)}</StyledLabel>
      <StyledInput
        style={{borderColor: statusColor}}
        value={value}
        {...rest}
      />
    </Wrapper>
  );
}

export default Input;